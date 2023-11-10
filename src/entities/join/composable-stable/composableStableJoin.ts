import { encodeFunctionData } from 'viem';
import { Token } from '../../../entities/token';
import { TokenAmount } from '../../../entities/tokenAmount';
import { Address } from '../../../types';
import { BALANCER_VAULT, MAX_UINT256, ZERO_ADDRESS } from '../../../utils';
import { vaultAbi } from '../../../abi';
import {
    BaseJoin,
    JoinBuildOutput,
    AddLiquidityInput,
    AddLiquidityKind,
    AddLiquidityComposableStableQueryResult,
    AddLiquidityComposableStableCall,
} from '../types';
import {
    AddLiquidityAmounts as AddLiquidityAmountsBase,
    PoolState,
} from '../../types';
import { doQueryJoin, getAmounts, parseJoinArgs } from '../../utils';
import { ComposableStableEncoder } from '../../encoders/composableStable';

type AddLiquidityAmounts = AddLiquidityAmountsBase & {
    maxAmountsInNoBpt: bigint[];
};

export class ComposableStableJoin implements BaseJoin {
    public async query(
        input: AddLiquidityInput,
        poolState: PoolState,
    ): Promise<AddLiquidityComposableStableQueryResult> {
        const bptIndex = poolState.tokens.findIndex(
            (t) => t.address === poolState.address,
        );
        const amounts = this.getAmountsQuery(poolState.tokens, input, bptIndex);

        const userData = this.encodeUserData(input.kind, amounts);

        const { args, tokensIn } = parseJoinArgs({
            useNativeAssetAsWrappedAmountIn:
                !!input.useNativeAssetAsWrappedAmountIn,
            chainId: input.chainId,
            sortedTokens: poolState.tokens,
            poolId: poolState.id,
            sender: ZERO_ADDRESS,
            recipient: ZERO_ADDRESS,
            maxAmountsIn: amounts.maxAmountsIn,
            userData,
            fromInternalBalance: input.fromInternalBalance ?? false,
        });

        const queryResult = await doQueryJoin(
            input.rpcUrl,
            input.chainId,
            args,
        );

        const bpt = new Token(input.chainId, poolState.address, 18);
        const bptOut = TokenAmount.fromRawAmount(bpt, queryResult.bptOut);

        const amountsIn = queryResult.amountsIn.map((a, i) =>
            TokenAmount.fromRawAmount(tokensIn[i], a),
        );

        return {
            poolType: poolState.type,
            addLiquidityKind: input.kind,
            poolId: poolState.id,
            bptOut,
            amountsIn,
            tokenInIndex: amounts.tokenInIndex,
            fromInternalBalance: !!input.fromInternalBalance,
            bptIndex,
        };
    }

    public buildCall(input: AddLiquidityComposableStableCall): JoinBuildOutput {
        const amounts = this.getAmountsCall(input);

        const userData = this.encodeUserData(input.addLiquidityKind, amounts);

        const { args } = parseJoinArgs({
            ...input,
            sortedTokens: input.amountsIn.map((a) => a.token),
            maxAmountsIn: amounts.maxAmountsIn,
            userData,
            fromInternalBalance: input.fromInternalBalance,
        });

        const call = encodeFunctionData({
            abi: vaultAbi,
            functionName: 'joinPool',
            args,
        });

        const value = input.amountsIn.find(
            (a) => a.token.address === ZERO_ADDRESS,
        )?.amount;

        return {
            call,
            to: BALANCER_VAULT,
            value: value === undefined ? 0n : value,
            minBptOut: amounts.minimumBpt,
            maxAmountsIn: amounts.maxAmountsIn,
        };
    }

    private getAmountsQuery(
        poolTokens: Token[],
        input: AddLiquidityInput,
        bptIndex: number,
    ): AddLiquidityAmounts {
        let addLiquidityAmounts: AddLiquidityAmountsBase;
        switch (input.kind) {
            case AddLiquidityKind.Init:
            case AddLiquidityKind.Unbalanced: {
                addLiquidityAmounts = {
                    minimumBpt: 0n,
                    maxAmountsIn: getAmounts(
                        poolTokens,
                        input.amountsIn,
                        BigInt(0),
                    ),
                    tokenInIndex: undefined,
                };
                break;
            }
            case AddLiquidityKind.SingleAsset: {
                const tokenInIndex = poolTokens
                    .filter((_, index) => index !== bptIndex) // Need to remove Bpt
                    .findIndex((t) => t.isSameAddress(input.tokenIn));
                if (tokenInIndex === -1)
                    throw Error("Can't find index of SingleAsset");
                const maxAmountsIn = Array(poolTokens.length).fill(0n);
                maxAmountsIn[tokenInIndex] = MAX_UINT256;
                addLiquidityAmounts = {
                    minimumBpt: input.bptOut.rawAmount,
                    maxAmountsIn,
                    tokenInIndex,
                };
                break;
            }
            case AddLiquidityKind.Proportional: {
                addLiquidityAmounts = {
                    minimumBpt: input.bptOut.rawAmount,
                    maxAmountsIn: Array(poolTokens.length).fill(MAX_UINT256),
                    tokenInIndex: undefined,
                };
                break;
            }
            default:
                throw Error('Unsupported Join Type');
        }

        return {
            ...addLiquidityAmounts,
            maxAmountsInNoBpt: [
                ...addLiquidityAmounts.maxAmountsIn.slice(0, bptIndex),
                ...addLiquidityAmounts.maxAmountsIn.slice(bptIndex + 1),
            ],
        };
    }

    private getAmountsCall(
        input: AddLiquidityComposableStableCall,
    ): AddLiquidityAmounts {
        let addLiquidityAmounts: AddLiquidityAmountsBase;
        switch (input.addLiquidityKind) {
            case AddLiquidityKind.Init:
            case AddLiquidityKind.Unbalanced: {
                const minimumBpt = input.slippage.removeFrom(
                    input.bptOut.amount,
                );
                addLiquidityAmounts = {
                    minimumBpt,
                    maxAmountsIn: input.amountsIn.map((a) => a.amount),
                    tokenInIndex: input.tokenInIndex,
                };
                break;
            }
            case AddLiquidityKind.SingleAsset:
            case AddLiquidityKind.Proportional: {
                addLiquidityAmounts = {
                    minimumBpt: input.bptOut.amount,
                    maxAmountsIn: input.amountsIn.map((a) =>
                        input.slippage.applyTo(a.amount),
                    ),
                    tokenInIndex: input.tokenInIndex,
                };
                break;
            }
            default:
                throw Error('Unsupported Join Type');
        }
        return {
            ...addLiquidityAmounts,
            maxAmountsInNoBpt: [
                ...addLiquidityAmounts.maxAmountsIn.slice(0, input.bptIndex),
                ...addLiquidityAmounts.maxAmountsIn.slice(input.bptIndex + 1),
            ],
        };
    }

    private encodeUserData(
        kind: AddLiquidityKind,
        amounts: AddLiquidityAmounts,
    ): Address {
        switch (kind) {
            case AddLiquidityKind.Init:
                return ComposableStableEncoder.joinInit(
                    amounts.maxAmountsInNoBpt,
                );
            case AddLiquidityKind.Unbalanced:
                return ComposableStableEncoder.joinUnbalanced(
                    amounts.maxAmountsInNoBpt,
                    amounts.minimumBpt,
                );
            case AddLiquidityKind.SingleAsset: {
                if (amounts.tokenInIndex === undefined) throw Error('No Index');
                return ComposableStableEncoder.joinSingleAsset(
                    amounts.minimumBpt,
                    amounts.tokenInIndex, // Has to be index without BPT
                );
            }
            case AddLiquidityKind.Proportional: {
                return ComposableStableEncoder.joinProportional(
                    amounts.minimumBpt,
                );
            }
            default:
                throw Error('Unsupported Join Type');
        }
    }
}
