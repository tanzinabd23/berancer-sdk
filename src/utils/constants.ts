import { Address, Chain } from 'viem';
import { Token } from '../entities/token';
import {
    arbitrum,
    avalanche,
    base,
    baseGoerli,
    bsc,
    gnosis,
    goerli,
    mainnet,
    optimism,
    polygon,
    polygonZkEvm,
    zkSync,
    zkSyncTestnet,
    fantom,
    sepolia,
} from 'viem/chains';

export const ZERO_ADDRESS: Address =
    '0x0000000000000000000000000000000000000000';
export const NATIVE_ADDRESS: Address =
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

export const MAX_UINT112 = 5192296858534827628530496329220095n;
export const MAX_UINT256 =
    115792089237316195423570985008687907853269984665640564039457584007913129639935n;
export const PREMINTED_STABLE_BPT = 2596148429267413814265248164610048n; // 2**111

export const DECIMAL_SCALES = {
    0: 1n,
    1: 10n,
    2: 100n,
    3: 1000n,
    4: 10000n,
    5: 100000n,
    6: 1000000n,
    7: 10000000n,
    8: 100000000n,
    9: 1000000000n,
    10: 10000000000n,
    11: 100000000000n,
    12: 1000000000000n,
    13: 10000000000000n,
    14: 100000000000000n,
    15: 1000000000000000n,
    16: 10000000000000000n,
    17: 100000000000000000n,
    18: 1000000000000000000n,
};

export const SECONDS_PER_YEAR = 31536000n;

export enum ChainId {
    MAINNET = 1,
    GOERLI = 5,
    OPTIMISM = 10,
    BSC = 56,
    GNOSIS_CHAIN = 100,
    POLYGON = 137,
    ZKSYNC_TESTNET = 280,
    FANTOM = 250,
    ZKSYNC = 324,
    ZKEVM = 1101,
    BASE = 8453,
    ARBITRUM_ONE = 42161,
    AVALANCHE = 43114,
    BASE_GOERLI = 84531,
    SEPOLIA = 11155111,
}

export const CHAINS: Record<number, Chain> = {
    [ChainId.MAINNET]: mainnet,
    [ChainId.GOERLI]: goerli,
    [ChainId.OPTIMISM]: optimism,
    [ChainId.BSC]: bsc,
    [ChainId.GNOSIS_CHAIN]: gnosis,
    [ChainId.POLYGON]: polygon,
    [ChainId.ZKSYNC_TESTNET]: zkSyncTestnet,
    [ChainId.ZKSYNC]: zkSync,
    [ChainId.ZKEVM]: polygonZkEvm,
    [ChainId.BASE]: base,
    [ChainId.ARBITRUM_ONE]: arbitrum,
    [ChainId.AVALANCHE]: avalanche,
    [ChainId.BASE_GOERLI]: baseGoerli,
    [ChainId.FANTOM]: fantom,
    [ChainId.SEPOLIA]: sepolia,
};

export const SUBGRAPH_URLS = {
    [ChainId.MAINNET]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    [ChainId.GOERLI]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-goerli-v2',
    [ChainId.OPTIMISM]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-optimism-v2',
    [ChainId.GNOSIS_CHAIN]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gnosis-chain-v2',
    [ChainId.POLYGON]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
    [ChainId.ZKSYNC_TESTNET]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-zktestnet-v2',
    [ChainId.ZKSYNC]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-zksync-v2',
    [ChainId.ZKEVM]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-zkevm-v2',
    [ChainId.BASE]:
        'https://api.studio.thegraph.com/query/24660/balancer-base-v2/version/latest',
    [ChainId.ARBITRUM_ONE]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2',
    [ChainId.AVALANCHE]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-avalanche-v2',
    [ChainId.BASE_GOERLI]:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-base-goerli-v2',
    [ChainId.FANTOM]:
        'https://api.thegraph.com/subgraphs/name/beethovenxfi/beethovenx-v2-fantom',
};

export const BATCHSIZE: Record<number, number> = {
    [ChainId.ARBITRUM_ONE]: 800,
    [ChainId.AVALANCHE]: 800,
    [ChainId.GNOSIS_CHAIN]: 800,
    [ChainId.MAINNET]: 800,
    [ChainId.OPTIMISM]: 800,
    [ChainId.POLYGON]: 800,
    [ChainId.ZKEVM]: 128,
    [ChainId.FANTOM]: 128,
    [ChainId.BASE]: 800,
};

/**
 * Deployment Addresses
 * Source: https://docs.balancer.fi/reference/contracts
 */

export const BALANCER_RELAYER: Record<number, Address> = {
    [ChainId.ARBITRUM_ONE]: '0x9B892E515D2Ab8869F17488d64B3b918731cc70d',
    [ChainId.AVALANCHE]: '0xA084c11cb55e67C9becf9607f1DBB20ec4D5E7b2',
    [ChainId.BSC]: '0xf41D6De4bbE9919d87BC1E5cc3335549e2A1A6c0',
    [ChainId.GNOSIS_CHAIN]: '0x2163c2FcD0940e84B8a68991bF926eDfB0Cd926C',
    [ChainId.GOERLI]: '0x7f36A11750F225De646b0de7b26BC74e797c310B',
    [ChainId.MAINNET]: '0x35Cea9e57A393ac66Aaa7E25C391D52C74B5648f',
    [ChainId.OPTIMISM]: '0x015ACA20a1422F3c729086c17f15F10e0CfbC75A',
    [ChainId.POLYGON]: '0xB1ED8d3b5059b3281D43306cC9D043cE8B22599b',
    [ChainId.SEPOLIA]: '0x7852fB9d0895e6e8b3EedA553c03F6e2F9124dF9',
    [ChainId.ZKEVM]: '0x8e620FfCa2580ed87241D7e10F85EE75d0a906F5',
    [ChainId.BASE]: '0x76f7204b62f554b79d444588edac9dfa7032c71a',
};

export const VAULT: Record<number, Address> = {
    [ChainId.ARBITRUM_ONE]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    [ChainId.AVALANCHE]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    [ChainId.GNOSIS_CHAIN]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    [ChainId.MAINNET]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    [ChainId.OPTIMISM]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    [ChainId.POLYGON]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    [ChainId.ZKEVM]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    [ChainId.FANTOM]: '0x20dd72Ed959b6147912C2e529F0a0C651c33c9ce',
    [ChainId.BASE]: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
};

export const VAULT_V3: Record<number, Address> = {
    [ChainId.SEPOLIA]: '0x816e90DC85bF016455017a76Bc09CC0451Eeb308',
};

export const BALANCER_QUERIES: Record<number, Address> = {
    [ChainId.ARBITRUM_ONE]: '0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5',
    [ChainId.AVALANCHE]: '0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5',
    [ChainId.GNOSIS_CHAIN]: '0x0f3e0c4218b7b0108a3643cfe9d3ec0d4f57c54e',
    [ChainId.MAINNET]: '0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5',
    [ChainId.OPTIMISM]: '0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5',
    [ChainId.POLYGON]: '0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5',
    [ChainId.ZKEVM]: '0x809b79b53f18e9bc08a961ed4678b901ac93213a',
    [ChainId.FANTOM]: '0x1B0A42663DF1edeA171cD8732d288a81EFfF6d23',
    [ChainId.BASE]: '0x300ab2038eac391f26d9f895dc61f8f66a548833',
};

export const WEIGHTED_POOL_FACTORY: Record<number, Address> = {
    [ChainId.ARBITRUM_ONE]: '0xc7e5ed1054a24ef31d827e6f86caa58b3bc168d7',
    [ChainId.AVALANCHE]: '0x230a59f4d9adc147480f03b0d3fffecd56c3289a',
    [ChainId.GNOSIS_CHAIN]: '0x6cad2ea22bfa7f4c14aae92e47f510cd5c509bc7',
    [ChainId.MAINNET]: '0x897888115ada5773e02aa29f775430bfb5f34c51',
    [ChainId.OPTIMISM]: '0x230a59f4d9adc147480f03b0d3fffecd56c3289a',
    [ChainId.POLYGON]: '0xfc8a407bba312ac761d8bfe04ce1201904842b76',
    [ChainId.ZKEVM]: '0x03f3fb107e74f2eac9358862e91ad3c692712054',
    [ChainId.BASE]: '0x4c32a8a8fda4e24139b51b456b42290f51d6a1c4',
};

export const COMPOSABLE_STABLE_POOL_FACTORY: Record<number, Address> = {
    [ChainId.ARBITRUM_ONE]: '0xa8920455934da4d853faac1f94fe7bef72943ef1',
    [ChainId.AVALANCHE]: '0xe42ffa682a26ef8f25891db4882932711d42e467',
    [ChainId.GNOSIS_CHAIN]: '0x4bdcc2fb18aeb9e2d281b0278d946445070eada7',
    [ChainId.MAINNET]: '0xdb8d758bcb971e482b2c45f7f8a7740283a1bd3a',
    [ChainId.OPTIMISM]: '0x043a2dad730d585c44fb79d2614f295d2d625412',
    [ChainId.POLYGON]: '0xe2fa4e1d17725e72dcdafe943ecf45df4b9e285b',
    [ChainId.ZKEVM]: '0x577e5993b9cc480f07f98b5ebd055604bd9071c4',
    [ChainId.BASE]: '0x8df317a729fcaa260306d7de28888932cb579b88',
};

export const BALANCER_ROUTER: Record<number, Address> = {
    [ChainId.SEPOLIA]: '0x9958317b80ee5f10457017d54c2484D722059157',
};

export const NATIVE_ASSETS = {
    [ChainId.MAINNET]: new Token(
        ChainId.MAINNET,
        NATIVE_ADDRESS,
        18,
        'ETH',
        'Ether',
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    ),
    [ChainId.GOERLI]: new Token(
        ChainId.GOERLI,
        NATIVE_ADDRESS,
        18,
        'ETH',
        'Ether',
        '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    ),
    [ChainId.GNOSIS_CHAIN]: new Token(
        ChainId.GNOSIS_CHAIN,
        NATIVE_ADDRESS,
        18,
        'xDAI',
        'xDAI',
        '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    ),
    [ChainId.POLYGON]: new Token(
        ChainId.POLYGON,
        NATIVE_ADDRESS,
        18,
        'MATIC',
        'Matic',
        '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    ),
    [ChainId.ARBITRUM_ONE]: new Token(
        ChainId.ARBITRUM_ONE,
        NATIVE_ADDRESS,
        18,
        'ETH',
        'Ether',
        '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    ),
    [ChainId.OPTIMISM]: new Token(
        ChainId.OPTIMISM,
        NATIVE_ADDRESS,
        18,
        'ETH',
        'Ether',
        '0x4200000000000000000000000000000000000006',
    ),
    [ChainId.FANTOM]: new Token(
        ChainId.FANTOM,
        NATIVE_ADDRESS,
        18,
        'FANTOM',
        'Fantom',
        '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    ),
    [ChainId.SEPOLIA]: new Token(
        ChainId.SEPOLIA,
        NATIVE_ADDRESS,
        18,
        'ETH',
        'Ether',
        '0x7b79995e5f793a07bc00c21412e50ecae098e7f9',
    ),
    [ChainId.BASE]: new Token(
        ChainId.BASE,
        NATIVE_ADDRESS,
        18,
        'ETH',
        'Ether',
        '0x4200000000000000000000000000000000000006',
    ),
};

export const ETH = NATIVE_ASSETS[ChainId.MAINNET];

export const DEFAULT_FUND_MANAGMENT = {
    sender: ZERO_ADDRESS,
    recipient: ZERO_ADDRESS,
    fromInternalBalance: false,
    toInternalBalance: false,
};

export const DEFAULT_USERDATA = '0x';

// Pools from `23 Vulnerability that are bricked/broken
export const brickedPools = [
    '0x00c2a4be503869fa751c2dbcb7156cc970b5a8da000000000000000000000477',
    '0x02d928e68d8f10c0358566152677db51e1e2dc8c00000000000000000000051e',
    '0x04248aabca09e9a1a3d5129a7ba05b7f17de768400000000000000000000050e',
    '0x05513ca725b6ce035ca2641075474eb469f05f4c00020000000000000000041f',
    '0x0a0fb4ff697de5ac5b6770cd8ee1b72af80b57cf000000000000000000000496',
    '0x0afbd58beca09545e4fb67772faf3858e610bcd00000000000000000000004b9',
    '0x0d05aac44ac7dd3c7ba5d50be93eb884a057d23400000000000000000000051c',
    '0x11839d635e2f0270da37e8ef4324d4d5d54329570002000000000000000004d8',
    '0x126e7643235ec0ab9c103c507642dc3f4ca23c66000000000000000000000468',
    '0x133d241f225750d2c92948e464a5a80111920331000000000000000000000476',
    '0x159cb00338fb63f263fd6f621df619cef71da9540000000000000000000004d5',
    '0x173063a30e095313eee39411f07e95a8a806014e0002000000000000000003ab',
    '0x1bd2f176a812e312077bca87e37c08432bb09f3e0000000000000000000005a1',
    '0x20b156776114e8a801e9767d90c6ccccc8adf398000000000000000000000499',
    '0x246ffb4d928e394a02e45761fecdba6c2e79b8eb000000000000000000000541',
    '0x25accb7943fd73dda5e23ba6329085a3c24bfb6a000200000000000000000387',
    '0x26c2b83fc8535deead276f5cc3ad9c1a2192e02700020000000000000000056b',
    '0x2b218683178d029bab6c9789b1073aa6c96e517600000000000000000000058c',
    '0x2ba7aa2213fa2c909cd9e46fed5a0059542b36b00000000000000000000003a3',
    '0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c0000000000000000000000fd',
    '0x2e52c64fd319e380cdbcfc4577ea1fda558a32e40002000000000000000005ba',
    '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
    '0x2ff1a9dbdacd55297452cfd8a4d94724bc22a5f7000000000000000000000484',
    '0x3035917be42af437cbdd774be26b9ec90a2bd677000200000000000000000543',
    '0x331d50e0b00fc1c32742f151e56b9b616227e23e00000000000000000000047c',
    '0x334c96d792e4b26b841d28f53235281cec1be1f200020000000000000000038a',
    '0x335d1709d4da9aca59d16328db5cd4ea66bfe06b0000000000000000000004d6',
    '0x395d8a1d9ad82b5abe558f8abbfe183b27138af40000000000000000000004e5',
    '0x3bb22fc9033b802f2ac47c18885f63476f158afc000000000000000000000483',
    '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b',
    '0x3cdae4f12a67ba563499e102f309c73213cb241c000000000000000000000335',
    '0x3dbb8d974b82e82ce79c20c0f5995f4f1f533ede000000000000000000000470',
    '0x3f7a7fd7f214be45ec26820fd01ac3be4fc75aa70002000000000000000004c5',
    '0x3fcb7085b8f2f473f80bf6d879cae99ea4de934400000000000000000000056d',
    '0x41503c9d499ddbd1dcdf818a1b05e9774203bf46000000000000000000000594',
    '0x4228290ee9cab692938ff0b4ba303fbcdb68e9f200020000000000000000057d',
    '0x454ed96955d04d2f5cdd05e0fd1c77975bfe5307000000000000000000000410',
    '0x481c5fc05d63a58aa2f0f2aa417c021b5d419cb200000000000000000000056a',
    '0x483006684f422a9448023b2382615c57c5ecf18f000000000000000000000488',
    '0x4a82b580365cff9b146281ab72500957a849abdc000000000000000000000494',
    '0x4c81255cc9ed7062180ea99962fe05ac0d57350b0000000000000000000005a3',
    '0x4c8d2e60863e8d7e1033eda2b3d84e92a641802000000000000000000000040f',
    '0x4cbde5c4b4b53ebe4af4adb85404725985406163000000000000000000000595',
    '0x4ce0bd7debf13434d3ae127430e9bd4291bfb61f00020000000000000000038b',
    '0x4ce277df0feb5b4d07a0ca2adcf5326e4005239d000000000000000000000518',
    '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473',
    '0x4fd63966879300cafafbb35d157dc5229278ed230000000000000000000000e9',
    '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f',
    '0x53bc3cba3832ebecbfa002c12023f8ab1aa3a3a0000000000000000000000411',
    '0x5a6a8cffb4347ff7fc484bf5f0f8a2e234d34255000200000000000000000275',
    '0x5b3240b6be3e7487d61cd1afdfc7fe4fa1d81e6400000000000000000000037b',
    '0x60683b05e9a39e3509d8fdb9c959f23170f8a0fa000000000000000000000489',
    '0x60d604890feaa0b5460b28a424407c24fe89374a0000000000000000000004fc',
    '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505',
    '0x652d486b80c461c397b0d95612a404da936f3db30000000000000000000000e7',
    '0x6667c6fa9f2b3fc1cc8d85320b62703d938e43850000000000000000000004fb',
    '0x6a1eb2e9b45e772f55bd9a34659a04b6f75da68700000000000000000000040d',
    '0x6c56e72c551b5ac4bf54a620a76077ca768c8fe40002000000000000000004da',
    '0x70b7d3b3209a59fb0400e17f67f3ee8c37363f4900020000000000000000018f',
    '0x7337224d59cb16c2dc6938cd45a7b2c60c865d6a0000000000000000000004d4',
    '0x74cbfaf94a3577c539a9dcee9870a6349a33b34f000000000000000000000534',
    '0x779d01f939d78a918a3de18cc236ee89221dfd4e0000000000000000000004c7',
    '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
    '0x804cdb9116a10bb78768d3252355a1b18067bf8f0000000000000000000000fb',
    '0x813e3fe1761f714c502d1d2d3a7cceb33f37f59d00000000000000000000040c',
    '0x82698aecc9e28e9bb27608bd52cf57f704bd1b83000000000000000000000336',
    '0x8a6b25e33b12d1bb6929a8793961076bd1f9d3eb0002000000000000000003e8',
    '0x8e6ec57a822c2f527f2df7c7d7d361df3e7530a1000000000000000000000498',
    '0x8f4063446f5011bc1c9f79a819efe87776f23704000000000000000000000197',
    '0x9001cbbd96f54a658ff4e6e65ab564ded76a543100000000000000000000050a',
    '0x9210f1204b5a24742eba12f710636d76240df3d00000000000000000000000fc',
    '0x9516a2d25958edb8da246a320f2c7d94a0dbe25d000000000000000000000519',
    '0x959216bb492b2efa72b15b7aacea5b5c984c3cca000200000000000000000472',
    '0x968024662b9566b42d78af23a0f441bc8723fa83000200000000000000000418',
    '0x99c88ad7dc566616548adde8ed3effa730eb6c3400000000000000000000049a',
    '0x9b1c8407a360443a9e5eca004713e4088fab8ac0000000000000000000000497',
    '0x9b692f571b256140a39a34676bffa30634c586e100000000000000000000059d',
    '0x9d7f992c900fbea0ec314bdd71b7cc1becf76a33000200000000000000000573',
    '0x9fb771d530b0ceba5160f7bfe2dd1e8b8aa1340300000000000000000000040e',
    '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
    '0xa1697f9af0875b63ddc472d6eebada8c1fab85680000000000000000000004f9',
    '0xa3823e50f20982656557a4a6a9c06ba5467ae9080000000000000000000000e6',
    '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475',
    '0xa8b103a10a94f4f2d7ed2fdcd5545e807557330700000000000000000000048e',
    '0xac5b4ef7ede2f2843a704e96dcaa637f4ba3dc3f00000000000000000000051d',
    '0xac976bb42cb0c85635644e8c7c74d0e0286aa61c0000000000000000000003cb',
    '0xae37d54ae477268b9997d4161b96b8200755935c000000000000000000000337',
    '0xae8535c23afedda9304b03c68a3563b75fc8f92b0000000000000000000005a0',
    '0xb0f75e97a114a4eb4a425edc48990e6760726709000000000000000000000198',
    '0xb5e3de837f869b0248825e0175da73d4e8c3db6b000200000000000000000474',
    '0xb841b062ea8ccf5c4cb78032e91de4ae875560420002000000000000000005b7',
    '0xb9bd68a77ccf8314c0dfe51bc291c77590c4e9e6000200000000000000000385',
    '0xbb6881874825e60e1160416d6c426eae65f2459e000000000000000000000592',
    '0xbc0f2372008005471874e426e86ccfae7b4de79d000000000000000000000485',
    '0xbf2ef8bdc2fc0f3203b3a01778e3ec5009aeef3300000000000000000000058d',
    '0xbfa413a2ff0f20456d57b643746133f54bfe0cd20000000000000000000004c3',
    '0xc2b021133d1b0cf07dba696fd5dd89338428225b000000000000000000000598',
    '0xc443c15033fcb6cf72cc24f1bda0db070ddd9786000000000000000000000593',
    '0xc50d4347209f285247bda8a09fc1c12ce42031c3000000000000000000000590',
    '0xc5dc1316ab670a2eed5716d7f19ced321191f38200000000000000000000056e',
    '0xc8c79fcd0e859e7ec81118e91ce8e4379a481ee6000000000000000000000196',
    '0xcaa052584b462198a5a9356c28bce0634d65f65c0000000000000000000004db',
    '0xcbfa4532d8b2ade2c261d3dd5ef2a2284f7926920000000000000000000004fa',
    '0xcfae6e251369467f465f13836ac8135bd42f8a56000000000000000000000591',
    '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a',
    '0xd6e355036f41dc261b3f1ed3bbc6003e87aadb4f000000000000000000000495',
    '0xd7edb56f63b2a0191742aea32df1f98ca81ed9c600000000000000000000058e',
    '0xd997f35c9b1281b82c8928039d14cddab5e13c2000000000000000000000019c',
    '0xdba274b4d04097b90a72b62467d828cefd708037000000000000000000000486',
    '0xdc063deafce952160ec112fa382ac206305657e60000000000000000000004c4',
    '0xdec02e6642e2c999af429f5ce944653cad15e093000000000000000000000469',
    '0xe03af00fabe8401560c1ff7d242d622a5b601573000000000000000000000493',
    '0xe0fcbf4d98f0ad982db260f86cf28b49845403c5000000000000000000000504',
    '0xe2d16b0a39f3fbb4389a0e8f1efcbecfb3d1e6e10000000000000000000005a7',
    '0xe4dc3c1998ac693d68f4c77476d7c815694c3e94000200000000000000000416',
    '0xe6bcc79f328eec93d4ec8f7ed35534d9ab549faa0000000000000000000000e8',
    '0xe8c56405bc405840154d9b572927f4197d110de10000000000000000000005a4',
    '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c',
    '0xeb567dde03f3da7fe185bdacd5ab495ab220769d000000000000000000000548',
    '0xec3626fee40ef95e7c0cbb1d495c8b67b34d398300000000000000000000053d',
    '0xf22ff21e17157340575158ad7394e068048dd98b0000000000000000000004b8',
    '0xf57c794f42da72b38c8f610ff3b5e8502e48cbde00000000000000000000055c',
    '0xf71d0774b214c4cf51e33eb3d30ef98132e4dbaa00000000000000000000046e',
    '0xfa24a90a3f2bbe5feea92b95cd0d14ce709649f900000000000000000000058f',
    '0xfd11ccdbdb7ab91cb9427a6d6bf570c95876d1950000000000000000000004c2',
    '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502',
    '0xfef969638c52899f91781f1be594af6f40b99bad00000000000000000000047b',
    '0x02e139d53ebf4033bf78ab66c6a1e7f1f204487f0002000000000000000009f9',
    '0x03090a9811181a2afe830a3a0b467698ccf3a8b1000000000000000000000bf5',
    '0x0320c1c5b6df19a194d48882aaec1c72940081d9000000000000000000000a7d',
    '0x04b54ea92d73de2d62d651db7d9778f0c49157d8000200000000000000000ba2',
    '0x0503dd6b2d3dd463c9bef67fb5156870af63393e00000000000000000000042e',
    '0x0889b240a5876aae745ac19f1771853671dc5d36000000000000000000000b3f',
    '0x0bc54e914f53f98d16035f4f0d948f3e09c2fac0000200000000000000000bac',
    '0x0c06e87c7b88d998f645b91c1f53b51294b12bca000100000000000000000bb9',
    '0x10b040038f87219d9b42e025e3bd9b8095c87dd9000000000000000000000b11',
    '0x117a3d474976274b37b7b94af5dcade5c90c6e85000000000000000000000aca',
    '0x11884da90fb4221b3aa288a7741c51ec4fc43b2f000000000000000000000a5f',
    '0x1379b816b9be611431d693290289c204720ca56d000100000000000000000b6f',
    '0x150e7b885bdfce974f2abe88a72fdbd692175c6f0002000000000000000009fd',
    '0x178e029173417b1f9c8bc16dcec6f697bc323746000000000000000000000758',
    '0x1aafc31091d93c3ff003cff5d2d8f7ba2e7284250000000000000000000003b3',
    '0x216690738aac4aa0c4770253ca26a28f0115c595000000000000000000000b2c',
    '0x216d6db0c28204014618482c369d7fbf0a8f3232000100000000000000000b60',
    '0x230ecdb2a7cee56d6889965a023aa0473d6da507000000000000000000000bf3',
    '0x252ff6a3a6fd7b5e8e999de8e3f5c3b306ed1401000200000000000000000bec',
    '0x25e57f4612912614e6c99616bd2abb9b5ae71e99000000000000000000000bf0',
    '0x2645b13fd2c5295296e94a76280b968bdcbbdfed000000000000000000000c11',
    '0x284eb68520c8fa83361c1a3a5910aec7f873c18b000000000000000000000ac9',
    '0x2c8dbe8eb86135d9f2f26d196748c088d47f73e7000200000000000000000a29',
    '0x31bccf9e28b94e5dacebaa67fe8bc1603cecd904000000000000000000000a01',
    '0x341068a547c3cde3c09e338714010dd01b32f93f000200000000000000000a34',
    '0x3db543faf7a92052de7860c5c9debabee59ed5bd000000000000000000000a62',
    '0x3dd0843a028c86e0b760b1a76929d1c5ef93a2dd00000000000000000000070d',
    '0x3efb91c4f9b103ee45885695c67794591916f34e000200000000000000000b43',
    '0x402cfdb7781fa85d52f425352661128250b79e12000000000000000000000be3',
    '0x43894de14462b421372bcfe445fa51b1b4a0ff3d000000000000000000000b36',
    '0x4739e50b59b552d490d3fdc60d200977a38510c0000000000000000000000b10',
    '0x48e6b98ef6329f8f0a30ebb8c7c960330d64808500000000000000000000075b',
    '0x4a0b73f0d13ff6d43e304a174697e3d5cfd310a400020000000000000000091c',
    '0x4a77ef015ddcd972fd9ba2c7d5d658689d090f1a000000000000000000000b38',
    '0x4ae3661afa119892f0cc8c43edaf6a94989ac171000000000000000000000c06',
    '0x4ccb966d8246240afb7a1a24628efb930870b1c40002000000000000000009fc',
    '0x52cc8389c6b93d740325729cc7c958066cee4262000000000000000000000b0f',
    '0x5b77107fcdf2b41903bab2bc555d4fc14cf7667d000000000000000000000b32',
    '0x5bae72b75caab1f260d21bc028c630140607d6e8000000000000000000000ac6',
    '0x600bd01b6526611079e12e1ff93aba7a3e34226f0000000000000000000009e4',
    '0x63ce19ccd39930725b8a3d2733627804718ab83d000000000000000000000bf2',
    '0x64efad69f099813021b41f4cac6e749fd55e188f000000000000000000000b39',
    '0x6933ec1ca55c06a894107860c92acdfd2dd8512f000000000000000000000428',
    '0x6abe4e7a497b8293c258389c1b00d177e4f257ed00010000000000000000080d',
    '0x6c8c7fc50247a47038015eb1fd5dc105d05dafba000200000000000000000ba0',
    '0x7079a25dec33be61bbd81b2fb69b468e80d3e72c0000000000000000000009ff',
    '0x71bd10c2a590b5858f5576550c163976a48af906000000000000000000000b27',
    '0x7c82a23b4c48d796dee36a9ca215b641c6a8709d000000000000000000000acd',
    '0x7f4f4942f2a14b6ab7b08b10ada1aacede4ee8d4000200000000000000000b44',
    '0x86aef31951e0a3a54333bd9e72f9a95587d058c5000200000000000000000912',
    '0x882c7a84231484b3e9f3fd45ac04b1eb5d35b076000200000000000000000a91',
    '0x894c82800526e0391e709c0983a5aea3718b7f6d000000000000000000000ac5',
    '0x89b28a9494589b09dbccb69911c189f74fdadc5a000000000000000000000b33',
    '0x89bb15076c9f2d86aa98ec6cffc1a71e31c38953000000000000000000000bf1',
    '0x89f1146fee52b5d9166e9c83cc388b6d8f69f1380001000000000000000009e7',
    '0x8a819a4cabd6efcb4e5504fe8679a1abd831dd8f00000000000000000000042d',
    '0x8b58a1e7fff52001c22386c2918d45938a6a9be30001000000000000000008d9',
    '0x8b8225bfedebaf1708c55743acb4ad43fd4d0f21000200000000000000000918',
    '0x8fbd0f8e490735cfc3abf4f29cbddd5c3289b9a7000000000000000000000b5b',
    '0x8fd39252d683fdb60bddd4df4b53c9380b496d59000200000000000000000b45',
    '0x9321e2250767d79bab5aa06daa8606a2b3b7b4c5000000000000000000000bf4',
    '0x949a12b95ec5b80c375b98963a5d6b33b0d0efff0002000000000000000009fe',
    '0x9a020bdc2faff5bd24c6acc2020d01ff9f2c627a000000000000000000000ae2',
    '0x9cf9358300e34bf9373d30129a1e718d8d058b54000200000000000000000913',
    '0x9e34631547adcf2f8cefa0f5f223955c7b137571000000000000000000000ad5',
    '0xa5a935833f6a5312715f182733eab088452335d7000100000000000000000bee',
    '0xa5fe91dde37d8bf2dacacc0168b115d28ed03f84000000000000000000000b35',
    '0xa8bf1c584519be0184311c48adbdc4c15cb2e8c1000000000000000000000bf6',
    '0xab269164a10fab22bc87c39946da06c870b172d6000000000000000000000bfc',
    '0xac2cae8d2f78a4a8f92f20dbe74042cd0a8d5af3000000000000000000000be2',
    '0xae646817e458c0be890b81e8d880206710e3c44e000000000000000000000acb',
    '0xaef2c171dbe64b0c18977e16e70bfd29d4ee0256000000000000000000000ac8',
    '0xb0c830dceb4ef55a60192472c20c8bf19df03488000000000000000000000be1',
    '0xb266ac3b7c98d7bcb28731dac0ef42dba1b276be000000000000000000000be4',
    '0xb371aa09f5a110ab69b39a84b5469d29f9b22b76000000000000000000000b37',
    '0xb3d658d5b95bf04e2932370dd1ff976fe18dd66a000000000000000000000ace',
    '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
    '0xb59be8f3c85a9dd6e2899103b6fbf6ea405b99a4000000000000000000000b34',
    '0xb878ecce26838fbba4f78cb5b791a0e09152c067000000000000000000000427',
    '0xb973ca96a3f0d61045f53255e319aedb6ed4924000000000000000000000042f',
    '0xbd4e35784c832d0f9049b54cb3609e5907c5b495000100000000000000000b14',
    '0xc55ec796a4debe625d95436a3531f4950b11bdcf000000000000000000000b3e',
    '0xc7e6389e364f4275eb442ef215ed21877028e2af000000000000000000000ac7',
    '0xc83b55bbd005f1f84906545fcdb145dee53523e0000200000000000000000b30',
    '0xcb21a9e647c95127ed784626485b3104cb28d0e7000000000000000000000425',
    '0xd00f9ca46ce0e4a63067c4657986f0167b0de1e5000000000000000000000b42',
    '0xd2f3b9e67c69762dd1c88f1d3dadd1649a190761000200000000000000000bf7',
    '0xd4accb350f9cf59fe3cf7a5ee6ed9ace6a568ea9000200000000000000000b75',
    '0xda1cd1711743e57dd57102e9e61b75f3587703da000000000000000000000acc',
    '0xdae301690004946424e41051ace1791083be42a1000000000000000000000b40',
    '0xde0a77ab6689b980c30306b10f9131a007e1af81000200000000000000000ba1',
    '0xe051605a83deae38d26a7346b100ef1ac2ef8a0b0000000000000000000003ce',
    '0xe1fb90d0d3b47e551d494d7ebe8f209753526b01000000000000000000000ac4',
    '0xe2272cddb2cc408e79e02a73d1db9acc24a843d5000200000000000000000ba7',
    '0xe2dc0e0f2c358d6e31836dee69a558ab8d1390e70000000000000000000009fa',
    '0xe4885ed2818cc9e840a25f94f9b2a28169d1aea7000000000000000000000b29',
    '0xe6909c2f18a29d97217a6146f045e1780606991f000100000000000000000bfe',
    '0xe78b25c06db117fdf8f98583cdaaa6c92b79e917000000000000000000000b2b',
    '0xea11645ac7d8f2def94c9d8d86bd766296c9b6b6000000000000000000000b3a',
    '0xeb480dbbdd921cd6c359e4cc4c65ddea6395e2a1000200000000000000000946',
    '0xed35f28f837e96f81240ebb82e0e3f518c7e8a2f000100000000000000000bb5',
    '0xf0211cceebe6fcc45052b4e57ee95d233f5669d2000100000000000000000c01',
    '0xf22a66046b5307842f21b311ecb4c462c24c0635000000000000000000000b15',
    '0xf28f17be00f8ca3c9b7f66a4aad5513757fb3341000200000000000000000b5a',
    '0xf42ed61450458ee4620f5ef4f29adb25a6ef0fb6000000000000000000000bf8',
    '0xf48f01dcb2cbb3ee1f6aab0e742c2d3941039d56000000000000000000000445',
    '0xf93579002dbe8046c43fefe86ec78b1112247bb8000000000000000000000759',
    '0xf984eb2b8a7ef780245a797a2fccd82f346409ca000000000000000000000a59',
    '0xfa2c0bd8327c99db5bde4c9e9e5cbf30946351bb000000000000000000000948',
    '0xff4ce5aaab5a627bf82f4a571ab1ce94aa365ea600000000000000000000075a',
    '0x1ac55c31dac78ca943cb8ebfca5945ce09e036e2000000000000000000000024',
    '0x225e0047671939a8d78e08ebd692788abe63f15c000000000000000000000009',
    '0x41211bba6d37f5a74b22e667533f080c7c7f3f1300000000000000000000000b',
    '0x4de21b365d6543661d0e105e579a34b963862497000200000000000000000045',
    '0x581ec1f5e7ced12b186deae32256adb53bdd5b08000000000000000000000001',
    '0x66f33ae36dd80327744207a48122f874634b3ada000100000000000000000013',
    '0xa3ed6f78edc29f69df8a0d16b1d1ccf9871f918c000000000000000000000032',
    '0xa611a551b95b205ccd9490657acf7899daee5db700000000000000000000002e',
    '0xb95829adbacd8af89e291dee78bc09e24de51d6b000000000000000000000043',
    '0xb973ca96a3f0d61045f53255e319aedb6ed49240000200000000000000000011',
    '0xba1a5b19d09a79dada039b1f974015c5a989d5fd000100000000000000000046',
    '0xbb9cd48d33033f5effbedec9dd700c7d7e1dcf5000000000000000000000000e',
    '0xd16f72b02da5f51231fde542a8b9e2777a478c8800000000000000000000000f',
    '0xd4015683b8153666190e0b2bec352580ebc4caca00000000000000000000000d',
    '0xe15cac1df3621e001f76210ab12a7f1a1691481f000000000000000000000044',
    '0xe7f88d7d4ef2eb18fcf9dd7216ba7da1c46f3dd600000000000000000000000a',
    '0xf48f01dcb2cbb3ee1f6aab0e742c2d3941039d56000200000000000000000012',
    '0xfedb19ec000d38d92af4b21436870f115db22725000000000000000000000010',
    '0xffff76a3280e95dc855696111c2562da09db2ac000000000000000000000000c',
    '0x00fcd3d55085e998e291a0005cedecf58ac14c4000020000000000000000047f',
    '0x077794c30afeccdf5ad2abc0588e8cee7197b71a000000000000000000000352',
    '0x117a3d474976274b37b7b94af5dcade5c90c6e85000000000000000000000381',
    '0x11884da90fb4221b3aa288a7741c51ec4fc43b2f000000000000000000000353',
    '0x19b1c92631405a0a9495ccba0becf4f2e8e908bd000000000000000000000410',
    '0x1e550b7764da9638fdd32c8a701364de31f45ee800000000000000000000047c',
    '0x1fa7f727934226aedab636d62a084931b97d366b000000000000000000000411',
    '0x23ca0306b21ea71552b148cf3c4db4fc85ae19290000000000000000000000c9',
    '0x284eb68520c8fa83361c1a3a5910aec7f873c18b000000000000000000000380',
    '0x2a96254ca32020b20ed3506f8f75318da24709f9000200000000000000000456',
    '0x36942963e3b6f37ecc45a4e72349558514233f0000000000000000000000048a',
    '0x3f53a862919ccfa023cb6ace91378a79fb0f6bf500000000000000000000040f',
    '0x40af308e3d07ec769d85eb80afb116525ff4ac99000000000000000000000485',
    '0x418de00ae109e6f874d872658767866d680eaa1900000000000000000000047d',
    '0x45c4d1376943ab28802b995acffc04903eb5223f000000000000000000000470',
    '0x4689122d360c4725d244c5cfea22861333d862e6000100000000000000000468',
    '0x4739e50b59b552d490d3fdc60d200977a38510c0000000000000000000000409',
    '0x49a0e3334496442a9706e481617724e7e37eaa080000000000000000000003ff',
    '0x519cce718fcd11ac09194cff4517f12d263be067000000000000000000000382',
    '0x52cc8389c6b93d740325729cc7c958066cee4262000000000000000000000408',
    '0x567ecfcb22205d279bb8eed3e066989902bf03d5000000000000000000000452',
    '0x585d95df0231fa08aeee35ff0c16b92fd0ecdc3300020000000000000000045f',
    '0x5a7f39435fd9c381e4932fa2047c9a5136a5e3e7000000000000000000000400',
    '0x5bae72b75caab1f260d21bc028c630140607d6e8000000000000000000000350',
    '0x6cb787a419c3e6ee2e9ff365856c29cd10659113000000000000000000000474',
    '0x7c82a23b4c48d796dee36a9ca215b641c6a8709d000000000000000000000406',
    '0x81fc12c60ee5b753cf5fd0adc342dfb5f3817e3200000000000000000000035d',
    '0x894c82800526e0391e709c0983a5aea3718b7f6d00000000000000000000034f',
    '0x970712708a08e8fb152be4d81b2dc586923f5369000200000000000000000479',
    '0x9bf7c3b63c77b4b4f2717776f15a4bec1b532a280000000000000000000000c8',
    '0x9cebf13bb702f253abf1579294694a1edad00eaa000000000000000000000486',
    '0x9e34631547adcf2f8cefa0f5f223955c7b137571000000000000000000000407',
    '0x9fb7d6dcac7b6aa20108bad226c35b85a9e31b63000200000000000000000412',
    '0xa1ea76c42b2938cfa9abea12357881006c52851300000000000000000000048f',
    '0xa50f89e9f439fde2a6fe05883721a00475da3c4500000000000000000000048b',
    '0xa612b6aed2e7ca1a3a4f23fbca9128461bbb7718000000000000000000000274',
    '0xa8af146d79ac0bb981e4e0d8b788ec5711b1d5d000000000000000000000047b',
    '0xad28940024117b442a9efb6d0f25c8b59e1c950b00000000000000000000046f',
    '0xae646817e458c0be890b81e8d880206710e3c44e00000000000000000000039d',
    '0xaef2c171dbe64b0c18977e16e70bfd29d4ee0256000000000000000000000351',
    '0xbbf9d705b75f408cfcaee91da32966124d2c6f7d00000000000000000000047e',
    '0xbd724eb087d4cc0f61a5fed1fffaf937937e14de000000000000000000000473',
    '0xbe0f30217be1e981add883848d0773a86d2d2cd4000000000000000000000471',
    '0xc46be4b8bb6b5a3d3120660efae9c5416318ed40000000000000000000000472',
    '0xc69771058481551261709d8db44977e9afde645000010000000000000000042a',
    '0xc6eee8cb7643ec2f05f46d569e9ec8ef8b41b389000000000000000000000475',
    '0xcba9ff45cfb9ce238afde32b0148eb82cbe635620000000000000000000003fd',
    '0xcf8b555b7754556cf2ac2165e77ee23ed8517d7900020000000000000000045e',
    '0xd0dc20e6342db2de82692b8dc842301ff9121805000200000000000000000454',
    '0xd3d5d45f4edf82ba0dfaf061d230766032a10e07000200000000000000000413',
    '0xd6d20527c7b0669989ee082b9d3a1c63af742290000000000000000000000483',
    '0xda1cd1711743e57dd57102e9e61b75f3587703da0000000000000000000003fc',
    '0xe1fb90d0d3b47e551d494d7ebe8f209753526b0100000000000000000000034e',
    '0xee02583596aee94cccb7e8ccd3921d955f17982a00000000000000000000040a',
    '0xf984eb2b8a7ef780245a797a2fccd82f346409ca00000000000000000000034d',
    '0xff8f84e8c87532af96aef5582ee451572233678b000200000000000000000478',
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015',
    '0x3f1a2c4a3a751f6626bd90ef16e104f0772d4d6b00020000000000000000001b',
    '0x7275c131b1f67e8b53b4691f92b0e35a4c1c6e22000000000000000000000010',
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013',
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012',
    '0xa826a114b0c7db4d1ff4a4be845a78998c64564c000000000000000000000008',
    '0xea67626e1f0b59e0d172a04f5702ef90bcdf440c00000000000000000000000f',
    '0xeb496161099d45b3ea4892408ef745c6182eb56e00000000000000000000000e',
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014',
    '0xed3e2f496cbcd8e212192fb8d1499842f04a0d19000000000000000000000009',
    '0x02c9dcb975262719a61f9b40bdf0987ead9add3a000000000000000000000006',
    '0x16c9a4d841e88e52b51936106010f27085a529ec00000000000000000000000c',
    '0x32be2d0ddeaf3333501b24a28668ce373ba8e763000200000000000000000014',
    '0x32f03464fdf909fdf3798f87ff3712b10c59bd86000000000000000000000005',
    '0x4b718e0e2fea1da68b763cd50c446fba03ceb2ea00000000000000000000000b',
    '0x68a69c596b3839023c0e08d09682314f582314e5000200000000000000000011',
    '0x6f34a44fce1506352a171232163e7716dd073ade000200000000000000000015',
    '0x9e2d87f904862671eb49cb358e74284762cc9f42000200000000000000000013',
    '0xac4b72c01072a52b73ca71105504f1372efcce0d000000000000000000000003',
    '0xbfd65c6160cfd638a85c645e6e6d8acac5dac935000000000000000000000004',
    '0xe274c9deb6ed34cfe4130f8d0a8a948dea5bb28600000000000000000000000d',
    '0x1f131ec1175f023ee1534b16fa8ab237c00e238100000000000000000000004a',
    '0x479a7d1fcdd71ce0c2ed3184bfbe9d23b92e8337000000000000000000000049',
    '0x23ca0306b21ea71552b148cf3c4db4fc85ae19290000000000000000000000ac',
    '0x43da214fab3315aa6c02e0b8f2bfb7ef2e3c60a50000000000000000000000ae',
    '0x62cf35db540152e94936de63efc90d880d4e241b0000000000000000000000ef',
    '0x098f32d98d0d64dba199fc1923d3bf4192e787190001000000000000000000d2',
    '0xb1c9ac57594e9b1ec0f3787d9f6744ef4cb0a02400000000000000000000006e',
    '0x05e7732bf9ae5592e6aa05afe8cd80f7ab0a7bea00020000000000000000005a',
    '0xde45f101250f2ca1c0f8adfc172576d10c12072d00000000000000000000003f',
    '0x981fb05b738e981ac532a99e77170ecb4bc27aef00010000000000000000004b',
    '0x6222ae1d2a9f6894da50aa25cb7b303497f9bebd000000000000000000000046',
    '0x3c74c4ed512050eb843d89fb9dcd5ebb4668eb6d0002000000000000000000cc',
    '0x7fe29a818438ed2759e30f65c2302295711d66fc0000000000000000000000e5',
    '0xb0de49429fbb80c635432bbad0b3965b2856017700010000000000000000004e',
    '0x428e1cc3099cf461b87d124957a0d48273f334b100000000000000000000007f',
    '0x359ea8618c405023fc4b98dab1b01f373792a12600010000000000000000004f',
    '0x62de5ca16a618e22f6dfe5315ebd31acb10c44b6000000000000000000000037',
    '0x7d6bff131b359da66d92f215fd4e186003bfaa42000000000000000000000058',
    '0x9964b1bd3cc530e5c58ba564e45d45290f677be2000000000000000000000036',
    '0x2c4a83f98d1cdbeeec825fabacd09c46e2dd3c570002000000000000000000de',
    '0x8b6d3aa69c1cf47677281691b1abf3831ba1329d0001000000000000000000d0',
    '0x64cee2338369aa9b36fc756ea231eb9bc242926f0000000000000000000000df',
    '0xe0b50b0635b90f7021d2618f76ab9a31b92d009400010000000000000000003a',
    '0x8a2872fd28f42bd9f6559907235e83fbf4167f480001000000000000000000f2',
    '0x362715c164d606682c4ea7e479633e419d9345eb0001000000000000000000e7',
    '0xcd7b2232b7435595bbc7fd7962f1f352fc2cc61a0000000000000000000000f0',
    '0xf572649606db4743d217a2fa6e8b8eb79742c24a000000000000000000000039',
    '0xbec621c9ab4ceddcc2a157ca9b5c475fab65f6a40000000000000000000000f3',
    '0x5470f064a19c65263b3033da3a6124fdf0a9bab80000000000000000000000e6',
    '0xcb89e89d798a4563d1599ea5508282e13b225b520000000000000000000000e4',
    '0xe94c45de980f914904fdcfa9fbbe7c4a0ffe6ac70000000000000000000000e0',
    '0x435272180a4125f3b47c92826f482fc6cc165958000200000000000000000059',
    '0x96a78983932b8739d1117b16d30c15607926b0c500000000000000000000006d',
    '0x593acbfb1eaf3b6ec86fa60325d816996fdcbc0d000000000000000000000038',
    '0xd1af4974fcc995cf36ba40b189caa92964a9126d0000000000000000000000f1',
];
