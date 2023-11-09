//0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b - 2CLP-USDC-DAI
// pnpm test -- weightedJoin.integration.test.ts
import { describe, test, beforeAll, beforeEach, expect } from 'vitest';
import dotenv from 'dotenv';
dotenv.config();

import {
    createTestClient,
    http,
    parseUnits,
    publicActions,
    walletActions,
    parseEther,
    Address,
} from 'viem';

import {
    ProportionalJoinInput,
    JoinKind,
    Slippage,
    Hex,
    PoolStateInput,
    CHAINS,
    ChainId,
    PoolJoin,
    JoinInput,
    InputAmount,
    getPoolAddress,
    UnbalancedJoinInput,
    SingleAssetJoinInput,
} from '../src';
import { forkSetup } from './lib/utils/helper';
import { assertProportionalJoin, doJoin } from './lib/utils/joinHelper';
import { JoinTxInput } from './lib/utils/types';
import { ANVIL_NETWORKS, startFork } from './anvil/anvil-global-setup';
import { gyroJoinKindNotSupported } from '../src/entities/join/utils/validateInputs';

const { rpcUrl } = await startFork(ANVIL_NETWORKS.POLYGON);
const chainId = ChainId.POLYGON;
const poolId =
    '0xdac42eeb17758daa38caf9a3540c808247527ae3000200000000000000000a2b'; // 2CLP-USDC-DAI

describe('Gyro2 join test', () => {
    let txInput: JoinTxInput;
    let poolStateInput: PoolStateInput;

    beforeAll(async () => {
        // setup mock api
        const api = new MockApi();

        // get pool state from api
        poolStateInput = await api.getPool(poolId);

        const client = createTestClient({
            mode: 'anvil',
            chain: CHAINS[chainId],
            transport: http(rpcUrl),
        })
            .extend(publicActions)
            .extend(walletActions);

        txInput = {
            client,
            poolJoin: new PoolJoin(),
            slippage: Slippage.fromPercentage('1'), // 1%
            poolStateInput,
            testAddress: '0xe84f75fc9caa49876d0ba18d309da4231d44e94d', // MATIC Holder Wallet, must hold amount of matic to approve tokens
            joinInput: {} as JoinInput,
        };
    });

    beforeEach(async () => {
        await forkSetup(
            txInput.client,
            txInput.testAddress,
            [
                ...txInput.poolStateInput.tokens.map((t) => t.address),
                txInput.poolStateInput.address,
            ],
            [0, 0, 0],
            [
                ...txInput.poolStateInput.tokens.map((t) => {
                    return parseUnits('1', t.decimals);
                }),
                parseUnits('1', 18),
            ],
        );
    });

    describe('proportional join', () => {
        let joinInput: ProportionalJoinInput;
        beforeAll(() => {
            const bptOut: InputAmount = {
                rawAmount: parseEther('1'),
                decimals: 18,
                address: poolStateInput.address,
            };
            joinInput = {
                bptOut,
                chainId,
                rpcUrl,
                kind: JoinKind.Proportional,
            };
        });
        test('with tokens', async () => {
            const joinResult = await doJoin({
                ...txInput,
                joinInput,
            });

            assertProportionalJoin(
                txInput.client.chain?.id as number,
                txInput.poolStateInput,
                joinInput,
                joinResult,
                txInput.slippage,
            );
        });
        //Removed test with native, because there are no GyroE V1 pool with wrapped native asset in any network
    });

    describe('unbalanced join', () => {
        let input: Omit<UnbalancedJoinInput, 'amountsIn'>;
        let amountsIn: InputAmount[];
        beforeAll(() => {
            amountsIn = txInput.poolStateInput.tokens.map((t) => ({
                rawAmount: parseUnits('1', t.decimals),
                decimals: t.decimals,
                address: t.address,
            }));
            input = {
                chainId,
                rpcUrl,
                kind: JoinKind.Unbalanced,
            };
        });
        test('must throw unsupported single asset join error', async () => {
            const joinInput = {
                ...input,
                amountsIn: [...amountsIn.splice(0, 1)],
            };
            await expect(() =>
                doJoin({
                    ...txInput,
                    joinInput,
                }),
            ).rejects.toThrowError(gyroJoinKindNotSupported);
        });
    });

    describe('single asset join', () => {
        let joinInput: SingleAssetJoinInput;
        beforeAll(() => {
            const bptOut: InputAmount = {
                rawAmount: parseEther('1'),
                decimals: 18,
                address: poolStateInput.address,
            };
            const tokenIn = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
            joinInput = {
                bptOut,
                tokenIn,
                chainId,
                rpcUrl,
                kind: JoinKind.SingleAsset,
            };
        });

        test('must throw unsupported single asset join error', async () => {
            await expect(() =>
                doJoin({
                    ...txInput,
                    joinInput,
                }),
            ).rejects.toThrowError(gyroJoinKindNotSupported);
        });
    });
});

/*********************** Mock To Represent API Requirements **********************/

export class MockApi {
    public async getPool(id: Hex): Promise<PoolStateInput> {
        return {
            id,
            address: getPoolAddress(id) as Address,
            type: 'GYRO2',
            tokens: [
                {
                    address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC(PoS)
                    decimals: 6,
                    index: 0,
                },
                {
                    address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
                    decimals: 18,
                    index: 1,
                },
            ],
        };
    }
}

/******************************************************************************/
