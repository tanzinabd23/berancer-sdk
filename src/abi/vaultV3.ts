import { vaultV3ExtensionAbi } from './vaultV3Extension';

export const vaultV3Abi = [
    ...vaultV3ExtensionAbi,
    [
        {
            inputs: [
                {
                    internalType: 'contract IVaultExtension',
                    name: 'vaultExtension',
                    type: 'address',
                },
                {
                    internalType: 'contract IAuthorizer',
                    name: 'authorizer',
                    type: 'address',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'target',
                    type: 'address',
                },
            ],
            name: 'AddressEmptyCode',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'account',
                    type: 'address',
                },
            ],
            name: 'AddressInsufficientBalance',
            type: 'error',
        },
        {
            inputs: [],
            name: 'AllZeroInputs',
            type: 'error',
        },
        {
            inputs: [],
            name: 'AmountGivenZero',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'limit',
                    type: 'uint256',
                },
            ],
            name: 'AmountInAboveMax',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'limit',
                    type: 'uint256',
                },
            ],
            name: 'AmountOutBelowMin',
            type: 'error',
        },
        {
            inputs: [],
            name: 'BalanceNotSettled',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'limit',
                    type: 'uint256',
                },
            ],
            name: 'BptAmountInAboveMax',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'limit',
                    type: 'uint256',
                },
            ],
            name: 'BptAmountOutBelowMin',
            type: 'error',
        },
        {
            inputs: [],
            name: 'CallbackFailed',
            type: 'error',
        },
        {
            inputs: [],
            name: 'CannotReceiveEth',
            type: 'error',
        },
        {
            inputs: [],
            name: 'CannotSwapSameToken',
            type: 'error',
        },
        {
            inputs: [],
            name: 'DoesNotSupportAddLiquidityCustom',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'allowance',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'needed',
                    type: 'uint256',
                },
            ],
            name: 'ERC20InsufficientAllowance',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'balance',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'needed',
                    type: 'uint256',
                },
            ],
            name: 'ERC20InsufficientBalance',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'approver',
                    type: 'address',
                },
            ],
            name: 'ERC20InvalidApprover',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'receiver',
                    type: 'address',
                },
            ],
            name: 'ERC20InvalidReceiver',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
            ],
            name: 'ERC20InvalidSender',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
            ],
            name: 'ERC20InvalidSpender',
            type: 'error',
        },
        {
            inputs: [],
            name: 'FailedInnerCall',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'index',
                    type: 'uint256',
                },
            ],
            name: 'HandlerOutOfBounds',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InputLengthMismatch',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidAddLiquidityKind',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidRemoveLiquidityKind',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidToken',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidTokenConfiguration',
            type: 'error',
        },
        {
            inputs: [],
            name: 'InvalidTokenType',
            type: 'error',
        },
        {
            inputs: [],
            name: 'MaxTokens',
            type: 'error',
        },
        {
            inputs: [],
            name: 'MinTokens',
            type: 'error',
        },
        {
            inputs: [],
            name: 'MultipleNonZeroInputs',
            type: 'error',
        },
        {
            inputs: [],
            name: 'NoHandler',
            type: 'error',
        },
        {
            inputs: [],
            name: 'NotStaticCall',
            type: 'error',
        },
        {
            inputs: [],
            name: 'NotVaultDelegateCall',
            type: 'error',
        },
        {
            inputs: [],
            name: 'PauseBufferPeriodDurationTooLarge',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolAlreadyInitialized',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolAlreadyRegistered',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolInRecoveryMode',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolNotInRecoveryMode',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolNotInitialized',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolNotPaused',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolNotRegistered',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolPauseWindowExpired',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolPaused',
            type: 'error',
        },
        {
            inputs: [],
            name: 'ProtocolSwapFeePercentageTooHigh',
            type: 'error',
        },
        {
            inputs: [],
            name: 'QueriesDisabled',
            type: 'error',
        },
        {
            inputs: [],
            name: 'ReentrancyGuardReentrantCall',
            type: 'error',
        },
        {
            inputs: [],
            name: 'RouterNotTrusted',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'uint8',
                    name: 'bits',
                    type: 'uint8',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'SafeCastOverflowedUintDowncast',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'SafeCastOverflowedUintToInt',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                },
            ],
            name: 'SafeERC20FailedOperation',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'SenderIsNotPauseManager',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'sender',
                    type: 'address',
                },
            ],
            name: 'SenderIsNotVault',
            type: 'error',
        },
        {
            inputs: [],
            name: 'SwapFeePercentageTooHigh',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                },
            ],
            name: 'TokenAlreadyRegistered',
            type: 'error',
        },
        {
            inputs: [],
            name: 'TokenNotRegistered',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'expectedToken',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'actualToken',
                    type: 'address',
                },
            ],
            name: 'TokensMismatch',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'limit',
                    type: 'uint256',
                },
            ],
            name: 'TotalSupplyTooLow',
            type: 'error',
        },
        {
            inputs: [],
            name: 'UserDataNotSupported',
            type: 'error',
        },
        {
            inputs: [],
            name: 'VaultNotPaused',
            type: 'error',
        },
        {
            inputs: [],
            name: 'VaultPauseWindowDurationTooLarge',
            type: 'error',
        },
        {
            inputs: [],
            name: 'VaultPauseWindowExpired',
            type: 'error',
        },
        {
            inputs: [],
            name: 'VaultPaused',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'handler',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'caller',
                    type: 'address',
                },
            ],
            name: 'WrongHandler',
            type: 'error',
        },
        {
            inputs: [],
            name: 'WrongVaultExtensionDeployment',
            type: 'error',
        },
        {
            inputs: [],
            name: 'ZeroDivision',
            type: 'error',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'owner',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'spender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Approval',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'contract IAuthorizer',
                    name: 'newAuthorizer',
                    type: 'address',
                },
            ],
            name: 'AuthorizerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'liquidityProvider',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'contract IERC20[]',
                    name: 'tokens',
                    type: 'address[]',
                },
                {
                    indexed: false,
                    internalType: 'int256[]',
                    name: 'deltas',
                    type: 'int256[]',
                },
            ],
            name: 'PoolBalanceChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
            ],
            name: 'PoolInitialized',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bool',
                    name: 'paused',
                    type: 'bool',
                },
            ],
            name: 'PoolPausedStateChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'bool',
                    name: 'recoveryMode',
                    type: 'bool',
                },
            ],
            name: 'PoolRecoveryModeStateChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'factory',
                    type: 'address',
                },
                {
                    components: [
                        {
                            internalType: 'contract IERC20',
                            name: 'token',
                            type: 'address',
                        },
                        {
                            internalType: 'enum TokenType',
                            name: 'tokenType',
                            type: 'uint8',
                        },
                        {
                            internalType: 'contract IRateProvider',
                            name: 'rateProvider',
                            type: 'address',
                        },
                        {
                            internalType: 'bool',
                            name: 'yieldFeeExempt',
                            type: 'bool',
                        },
                    ],
                    indexed: false,
                    internalType: 'struct TokenConfig[]',
                    name: 'tokenConfig',
                    type: 'tuple[]',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'pauseWindowEndTime',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'address',
                    name: 'pauseManager',
                    type: 'address',
                },
                {
                    components: [
                        {
                            internalType: 'bool',
                            name: 'shouldCallBeforeInitialize',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'shouldCallAfterInitialize',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'shouldCallBeforeSwap',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'shouldCallAfterSwap',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'shouldCallBeforeAddLiquidity',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'shouldCallAfterAddLiquidity',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'shouldCallBeforeRemoveLiquidity',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'shouldCallAfterRemoveLiquidity',
                            type: 'bool',
                        },
                    ],
                    indexed: false,
                    internalType: 'struct PoolCallbacks',
                    name: 'callbacks',
                    type: 'tuple',
                },
                {
                    components: [
                        {
                            internalType: 'bool',
                            name: 'supportsAddLiquidityCustom',
                            type: 'bool',
                        },
                        {
                            internalType: 'bool',
                            name: 'supportsRemoveLiquidityCustom',
                            type: 'bool',
                        },
                    ],
                    indexed: false,
                    internalType: 'struct LiquidityManagement',
                    name: 'liquidityManagement',
                    type: 'tuple',
                },
            ],
            name: 'PoolRegistered',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'ProtocolFeeCollected',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'swapFeePercentage',
                    type: 'uint256',
                },
            ],
            name: 'ProtocolSwapFeePercentageChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'contract IERC20',
                    name: 'tokenIn',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'contract IERC20',
                    name: 'tokenOut',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amountIn',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'amountOut',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'swapFeeAmount',
                    type: 'uint256',
                },
            ],
            name: 'Swap',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'Transfer',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: 'bool',
                    name: 'paused',
                    type: 'bool',
                },
            ],
            name: 'VaultPausedStateChanged',
            type: 'event',
        },
        {
            stateMutability: 'payable',
            type: 'fallback',
        },
        {
            inputs: [],
            name: 'MAX_BUFFER_PERIOD_DURATION',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'MAX_PAUSE_WINDOW_DURATION',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'pool',
                            type: 'address',
                        },
                        {
                            internalType: 'address',
                            name: 'to',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256[]',
                            name: 'maxAmountsIn',
                            type: 'uint256[]',
                        },
                        {
                            internalType: 'uint256',
                            name: 'minBptAmountOut',
                            type: 'uint256',
                        },
                        {
                            internalType: 'enum AddLiquidityKind',
                            name: 'kind',
                            type: 'uint8',
                        },
                        {
                            internalType: 'bytes',
                            name: 'userData',
                            type: 'bytes',
                        },
                    ],
                    internalType: 'struct AddLiquidityParams',
                    name: 'params',
                    type: 'tuple',
                },
            ],
            name: 'addLiquidity',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: 'amountsIn',
                    type: 'uint256[]',
                },
                {
                    internalType: 'uint256',
                    name: 'bptAmountOut',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes',
                    name: 'returnData',
                    type: 'bytes',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getVaultExtension',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes',
                    name: 'data',
                    type: 'bytes',
                },
            ],
            name: 'invoke',
            outputs: [
                {
                    internalType: 'bytes',
                    name: 'result',
                    type: 'bytes',
                },
            ],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'pool',
                            type: 'address',
                        },
                        {
                            internalType: 'address',
                            name: 'from',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxBptAmountIn',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256[]',
                            name: 'minAmountsOut',
                            type: 'uint256[]',
                        },
                        {
                            internalType: 'enum RemoveLiquidityKind',
                            name: 'kind',
                            type: 'uint8',
                        },
                        {
                            internalType: 'bytes',
                            name: 'userData',
                            type: 'bytes',
                        },
                    ],
                    internalType: 'struct RemoveLiquidityParams',
                    name: 'params',
                    type: 'tuple',
                },
            ],
            name: 'removeLiquidity',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'bptAmountIn',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256[]',
                    name: 'amountsOut',
                    type: 'uint256[]',
                },
                {
                    internalType: 'bytes',
                    name: 'returnData',
                    type: 'bytes',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'pool',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'exactBptAmountIn',
                    type: 'uint256',
                },
            ],
            name: 'removeLiquidityRecovery',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: 'amountsOutRaw',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'from',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'retrieve',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                },
            ],
            name: 'settle',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'paid',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        {
                            internalType: 'enum SwapKind',
                            name: 'kind',
                            type: 'uint8',
                        },
                        {
                            internalType: 'address',
                            name: 'pool',
                            type: 'address',
                        },
                        {
                            internalType: 'contract IERC20',
                            name: 'tokenIn',
                            type: 'address',
                        },
                        {
                            internalType: 'contract IERC20',
                            name: 'tokenOut',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'amountGivenRaw',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bytes',
                            name: 'userData',
                            type: 'bytes',
                        },
                    ],
                    internalType: 'struct SwapParams',
                    name: 'params',
                    type: 'tuple',
                },
            ],
            name: 'swap',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'amountCalculated',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'amountIn',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'amountOut',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: 'to',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                },
            ],
            name: 'wire',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            stateMutability: 'payable',
            type: 'receive',
        },
    ],
] as const;
