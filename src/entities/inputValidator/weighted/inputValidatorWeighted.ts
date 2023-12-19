import { AddLiquidityInput } from '../../addLiquidity';
import { CreatePoolWeightedInput } from '../../createPool/types';
import { InitPoolInput } from '../../initPool/types';
import { RemoveLiquidityInput } from '../../removeLiquidity';
import { PoolState } from '../../types';
import { InputValidatorBase } from '../types';
import {
    validateCreatePoolTokens,
    validateTokensAddLiquidity,
    validateTokensRemoveLiquidity,
} from '../utils/validateTokens';

export class InputValidatorWeighted implements InputValidatorBase {
    validateCreatePool(input: CreatePoolWeightedInput) {
        validateCreatePoolTokens(input.tokens);
        if (input.tokens.length > 8) {
            throw new Error('Weighted pools can have a maximum of 8 tokens');
        }
        const weightsSum = input.tokens.reduce(
            (acc, { weight }) => acc + weight,
            0n,
        );
        if (weightsSum !== BigInt(1e18)) {
            throw new Error('Weights must sum to 1e18');
        }
        if (input.tokens.find(({ weight }) => weight === 0n)) {
            throw new Error('Weight cannot be 0');
        }
    }

    validateAddLiquidity(
        addLiquidityInput: AddLiquidityInput | InitPoolInput,
        poolState: PoolState,
    ): void {
        validateTokensAddLiquidity(addLiquidityInput, poolState);
    }

    validateRemoveLiquidity(
        input: RemoveLiquidityInput,
        poolState: PoolState,
    ): void {
        validateTokensRemoveLiquidity(input, poolState);
    }
}
