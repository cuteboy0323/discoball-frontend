import { CIDS } from 'config';
import { Token } from 'types/token';
import { CHAIN_ID } from './networks';

const { MAINNET, TESTNET } = CIDS;

interface TokenList {
    [symbol: string]: Token;
}

const defineTokens = <T extends TokenList>(t: T) => t;

export const mainnetTokens = defineTokens({
    wbnb: {
        chainId: MAINNET,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        decimals: 18,
        symbol: 'WBNB',
        name: 'Wrapped BNB',
        apiId: 'binancecoin',
        projectLink: 'https://www.binance.com/'
    },
    bnb: {
        chainId: MAINNET,
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        decimals: 18,
        symbol: 'BNB',
        name: 'BNB',
        apiId: 'binancecoin',
        projectLink: 'https://www.binance.com/'
    },
    dbt: {
        chainId: MAINNET,
        address: '0x4A251d4fDcbbbc0A3d6Aa44F14B96480C4933C9C',
        decimals: 9,
        symbol: 'DBT',
        name: 'Disco Burn Token',
        apiId: 'disco-burn-token',
        projectLink: 'https://discoburntoken.com/'
    },
    dft: {
        chainId: MAINNET,
        address: '0xBEbfd73E295E77a962DA026E91127C6D6b33b133',
        decimals: 9,
        symbol: 'DFT',
        name: 'Disco Fud Token',
        apiId: '',
        projectLink: 'https://discoburntoken.com/'
    }
} as const);

export const testnetTokens = defineTokens({} as const);

const tokens = () => {
    const chainId = CHAIN_ID;

    // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
    if (parseInt(chainId, 10) === TESTNET) {
        return Object.keys(mainnetTokens).reduce((accum, key) => {
            return {
                ...accum,
                [key]: testnetTokens[key] || mainnetTokens[key]
            };
        }, {} as typeof testnetTokens & typeof mainnetTokens);
    }

    return mainnetTokens;
};

const unserializedTokens = tokens();
export default unserializedTokens;
