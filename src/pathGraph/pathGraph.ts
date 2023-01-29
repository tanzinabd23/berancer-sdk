import { BasePool, Path, Token } from '../entities';
import { PathGraphEdgeData, PathGraphTraversalConfig } from './pathGraphTypes';
import { PoolType } from '../types';

const DEFAULT_MAX_PATHS_PER_TOKEN_PAIR = 2;

export class PathGraph {
    private nodes: Map<string, { isPhantomBpt: boolean }>;
    private edges: Map<string, Map<string, PathGraphEdgeData[]>>;
    private poolAddressMap: Map<string, BasePool>;
    private maxPathsPerTokenPair = DEFAULT_MAX_PATHS_PER_TOKEN_PAIR;

    constructor() {
        this.nodes = new Map();
        this.edges = new Map();
        this.poolAddressMap = new Map();
    }

    // We build a directed graph for all pools.
    // Nodes are tokens and edges are triads: [pool.id, tokenIn, tokenOut].
    // The current criterion for including a pool path into this graph is the following:
    // (a) We include every path that includes a phantom BPT.
    // (b) For any token pair x -> y, we include only the most liquid ${maxPathsPerTokenPair}
    // pool pairs (default 2).
    public buildGraph({
        pools,
        maxPathsPerTokenPair = DEFAULT_MAX_PATHS_PER_TOKEN_PAIR,
    }: {
        pools: BasePool[];
        maxPathsPerTokenPair?: number;
    }) {
        this.poolAddressMap = new Map();
        this.nodes = new Map();
        this.edges = new Map();
        this.maxPathsPerTokenPair = maxPathsPerTokenPair;

        this.buildPoolAddressMap(pools);

        this.addAllTokensAsGraphNodes(pools);

        this.addTokenPairsAsGraphEdges({ pools, maxPathsPerTokenPair });
    }

    // Since the path combinations here can get quite large, we use configurable parameters
    // to enforce upper limits across several dimensions, defined in the pathConfig.
    // (a) maxDepth - the max depth of the traversal (length of token path), defaults to 7.
    // (b) maxNonBoostedPathDepth - the max depth for any path that does not contain a phantom bpt.
    // (c) maxNonBoostedHopTokensInBoostedPath - The max number of non boosted hop tokens
    // allowed in a boosted path.
    // (d) approxPathsToReturn - search for up to this many paths. Since all paths for a single traversal
    // are added, its possible that the amount returned is larger than this number.
    // (e) poolIdsToInclude - Only include paths with these poolIds (optional)

    // Additionally, we impose the following requirements for a path to be considered valid
    // (a) It does not visit the same token twice
    // (b) It does not use the same pool twice
    public getCandidatePaths({
        tokenIn,
        tokenOut,
        pathConfig,
    }: {
        tokenIn: Token;
        tokenOut: Token;
        pathConfig?: Partial<PathGraphTraversalConfig>;
    }): Path[] {
        // apply defaults, allowing caller override whatever they'd like
        const config: PathGraphTraversalConfig = {
            maxDepth: 7,
            maxNonBoostedPathDepth: 3,
            maxNonBoostedHopTokensInBoostedPath: 1,
            approxPathsToReturn: 5,
            ...pathConfig,
        };

        const tokenPaths = this.findAllValidTokenPaths({
            token: tokenIn.wrapped,
            tokenIn: tokenIn.wrapped,
            tokenOut: tokenOut.wrapped,
            config,
            tokenPath: [tokenIn.wrapped],
        });

        const paths: PathGraphEdgeData[][] = [];
        const selectedPathIds: string[] = [];
        let seenPoolAddresses: string[] = [];

        while (paths.length < config.approxPathsToReturn) {
            // the tokenPairIndex refers to the nth most liquid path for a token
            // pair x -> y. maxPathsPerTokenPair is provided as a config on graph init
            for (let idx = 0; idx < this.maxPathsPerTokenPair; idx++) {
                for (let i = 0; i < tokenPaths.length; i++) {
                    const path = this.expandTokenPath({
                        tokenPath: tokenPaths[i],
                        tokenPairIndex: idx,
                    });

                    if (this.isValidPath({ path, seenPoolAddresses, selectedPathIds, config })) {
                        seenPoolAddresses = [
                            ...seenPoolAddresses,
                            ...path.map(segment => segment.pool.address),
                        ];
                        selectedPathIds.push(this.getIdForPath(path));
                        paths.push(path);
                    }
                }
            }

            // the assumption we make here is that if we are going to re-use a pool,
            // the outcome will most likely be better if we reuse stable pools over
            // volatile pools. If there are stable pools in the seen list, we remove
            // them and rerun the traversal.
            if (paths.length < config.approxPathsToReturn && seenPoolAddresses.length > 0) {
                const volatilePoolAddresses = this.filterVolatilePools(seenPoolAddresses);

                if (
                    volatilePoolAddresses.length > 0 &&
                    volatilePoolAddresses.length < seenPoolAddresses.length
                ) {
                    seenPoolAddresses = volatilePoolAddresses;
                } else {
                    seenPoolAddresses = [];
                }
            } else {
                // we have either found enough paths, or found no new paths for
                // for an entire iteration
                break;
            }
        }

        return paths.map(path => {
            const pathTokens: Token[] = [...path.map(segment => segment.tokenOut)];
            pathTokens.unshift(path[0].tokenIn);

            return {
                tokens: pathTokens,
                pools: path.map(segment => segment.pool),
            };
        });
    }

    private buildPoolAddressMap(pools: BasePool[]) {
        for (const pool of pools) {
            this.poolAddressMap.set(pool.address, pool);
        }
    }

    private addAllTokensAsGraphNodes(pools: BasePool[]) {
        for (const pool of pools) {
            for (const tokenAmount of pool.tokens) {
                const token = tokenAmount.token;

                if (!this.nodes.has(token.wrapped)) {
                    this.addNode(token);
                }
            }
        }
    }

    private addTokenPairsAsGraphEdges({
        pools,
        maxPathsPerTokenPair,
    }: {
        pools: BasePool[];
        maxPathsPerTokenPair: number;
    }) {
        for (const pool of pools) {
            for (let i = 0; i < pool.tokens.length - 1; i++) {
                for (let j = i + 1; j < pool.tokens.length; j++) {
                    const tokenI = pool.tokens[i].token;
                    const tokenJ = pool.tokens[j].token;

                    this.addEdge({
                        edgeProps: {
                            pool,
                            tokenIn: tokenI,
                            tokenOut: tokenJ,
                            normalizedLiquidity: pool.getNormalizedLiquidity(tokenI, tokenJ),
                        },
                        maxPathsPerTokenPair,
                    });

                    this.addEdge({
                        edgeProps: {
                            pool,
                            tokenIn: tokenJ,
                            tokenOut: tokenI,
                            normalizedLiquidity: pool.getNormalizedLiquidity(tokenJ, tokenI),
                        },
                        maxPathsPerTokenPair,
                    });
                }
            }
        }
    }

    private addNode(token: Token): void {
        this.nodes.set(token.wrapped, {
            isPhantomBpt: !!this.poolAddressMap[token.wrapped],
        });

        if (!this.edges.has(token.wrapped)) {
            this.edges.set(token.wrapped, new Map());
        }
    }

    /**
     * Returns the vertices connected to a given vertex
     */
    public getConnectedVertices(tokenAddress: string): string[] {
        const result: string[] = [];
        const edges = this.edges.get(tokenAddress) || [];

        for (const [otherToken] of edges) {
            result.push(otherToken);
        }

        return result;
    }

    /**
     * Adds a directed edge from a source vertex to a destination
     */
    private addEdge({
        edgeProps,
        maxPathsPerTokenPair,
    }: {
        edgeProps: PathGraphEdgeData;
        maxPathsPerTokenPair: number;
    }): void {
        const tokenInVertex = this.nodes.get(edgeProps.tokenIn.wrapped);
        const tokenOutVertex = this.nodes.get(edgeProps.tokenOut.wrapped);
        const tokenInNode = this.edges.get(edgeProps.tokenIn.wrapped);

        if (!tokenInVertex || !tokenOutVertex || !tokenInNode) {
            throw new Error('Attempting to add invalid edge');
        }

        const hasPhantomBpt = tokenInVertex.isPhantomBpt || tokenOutVertex.isPhantomBpt;
        const existingEdges = tokenInNode.get(edgeProps.tokenOut.wrapped) || [];

        //TODO: ideally we don't call sort every time, this isn't performant
        const sorted = [...existingEdges, edgeProps].sort((a, b) =>
            a.normalizedLiquidity > b.normalizedLiquidity ? -1 : 1,
        );

        tokenInNode.set(
            edgeProps.tokenOut.wrapped,
            sorted.length > maxPathsPerTokenPair && !hasPhantomBpt ? sorted.slice(0, 2) : sorted,
        );
    }

    public findAllValidTokenPaths(args: {
        token: string;
        tokenIn: string;
        tokenOut: string;
        tokenPath: string[];
        config: PathGraphTraversalConfig;
    }): string[][] {
        const tokenPaths: string[][] = [];

        this.traverseBfs({
            ...args,
            callback: tokenPath => {
                tokenPaths.push(tokenPath);
            },
        });

        return tokenPaths;
    }

    public expandTokenPath({
        tokenPath,
        tokenPairIndex,
    }: {
        tokenPath: string[];
        tokenPairIndex: number;
    }) {
        const segments: PathGraphEdgeData[] = [];

        for (let i = 0; i < tokenPath.length - 1; i++) {
            const edge = this.edges.get(tokenPath[i])?.get(tokenPath[i + 1]);

            if (!edge || edge.length === 0) {
                throw new Error(`Missing edge for pair ${tokenPath[i]} -> ${tokenPath[i + 1]}`);
            }

            segments.push(edge[tokenPairIndex] || edge[0]);
        }

        return segments;
    }

    private traverseBfs({
        token,
        tokenIn,
        tokenOut,
        tokenPath,
        callback,
        config,
    }: {
        token: string;
        tokenIn: string;
        tokenOut: string;
        tokenPath: string[];
        callback: (tokenPath: string[]) => void;
        config: PathGraphTraversalConfig;
    }): void {
        const neighbors = this.getConnectedVertices(token);

        for (const neighbor of neighbors) {
            const validTokenPath = this.isValidTokenPath({
                tokenPath: [...tokenPath, neighbor],
                tokenIn,
                tokenOut,
                config,
            });

            if (validTokenPath && neighbor === tokenOut) {
                callback([...tokenPath, neighbor]);
            } else if (validTokenPath && !tokenPath.includes(neighbor)) {
                this.traverseBfs({
                    tokenPath: [...tokenPath, neighbor],
                    token: neighbor,
                    tokenIn,
                    tokenOut,
                    callback,
                    config,
                });
            }
        }
    }

    private isValidTokenPath({
        tokenPath,
        config,
        tokenIn,
        tokenOut,
    }: {
        tokenPath: string[];
        config: PathGraphTraversalConfig;
        tokenIn: string;
        tokenOut: string;
    }) {
        const isCompletePath = tokenPath[tokenPath.length - 1] === tokenOut;
        const hopTokens = tokenPath.filter(token => token !== tokenIn && token !== tokenOut);
        const numStandardHopTokens = hopTokens.filter(
            token => !this.poolAddressMap.has(token),
        ).length;
        const isBoostedPath = tokenPath.filter(token => this.poolAddressMap.has(token)).length > 0;

        if (tokenPath.length > config.maxDepth) {
            return false;
        }

        if (isBoostedPath && numStandardHopTokens > config.maxNonBoostedHopTokensInBoostedPath) {
            return false;
        }

        // if the path length is greater than maxNonBoostedPathDepth, then this path
        // will only be valid if its a boosted path, so it must honor maxNonBoostedHopTokensInBoostedPath
        if (
            tokenPath.length > config.maxNonBoostedPathDepth &&
            numStandardHopTokens > config.maxNonBoostedHopTokensInBoostedPath
        ) {
            return false;
        }

        if (isCompletePath && !isBoostedPath && tokenPath.length > config.maxNonBoostedPathDepth) {
            return false;
        }

        return true;
    }

    private isValidPath({
        path,
        seenPoolAddresses,
        selectedPathIds,
        config,
    }: {
        path: PathGraphEdgeData[];
        seenPoolAddresses: string[];
        selectedPathIds: string[];
        config: PathGraphTraversalConfig;
    }) {
        const poolIdsInPath = path.map(segment => segment.pool.id);
        const uniquePools = [...new Set(poolIdsInPath)];

        if (config.poolIdsToInclude) {
            for (const poolId of poolIdsInPath) {
                if (!config.poolIdsToInclude.includes(poolId)) {
                    //path includes a pool that is not allowed for this traversal
                    return false;
                }
            }
        }

        //dont include any path that hops through the same pool twice
        if (uniquePools.length !== poolIdsInPath.length) {
            return false;
        }

        for (const segment of path) {
            if (seenPoolAddresses.includes(segment.pool.address)) {
                //this path contains a pool that has already been used
                return false;
            }
        }

        //this is a duplicate path
        if (selectedPathIds.includes(this.getIdForPath(path))) {
            return false;
        }

        return true;
    }

    private getIdForPath(path: PathGraphEdgeData[]): string {
        let id = '';

        for (const segment of path) {
            if (id.length > 0) {
                id += '_';
            }

            id += `${segment.pool.id}-${segment.tokenIn}-${segment.tokenOut}`;
        }

        return id;
    }

    private filterVolatilePools(poolAddresses: string[]): string[] {
        const filtered: string[] = [];

        for (const poolAddress of poolAddresses) {
            if (this.poolAddressMap.get(poolAddress)?.poolType === PoolType.Weighted) {
                filtered.push(poolAddress);
            }
        }

        return filtered;
    }
}
