import tokens from './tokens';

export const SWAP_TOKENS = {
    dbt: [
        {
            ...tokens.bnb,
            id: 'bnb',
            icon: require('assets/img/bnb.png'),
            isBase: true,
            method: ['buy', 'sell']
        },
        {
            ...tokens.dbt,
            id: 'dbt',
            icon: require('assets/img/dbt.png'),
            isBase: false,
            method: ['buy', 'sell']
        }
    ],
    dft: [
        {
            ...tokens.bnb,
            id: 'bnb',
            icon: require('assets/img/bnb.png'),
            isBase: true,
            method: ['buy', 'sell']
        },
        {
            ...tokens.dft,
            id: 'dbtf',
            icon: require('assets/img/dft.png'),
            isBase: false,
            method: ['buy', 'sell']
        }
    ]
};

export const SWAP_TYPES = [
    {
        id: 'dbt',
        icon: require('assets/img/dbt.png'),
        label: 'DISCO BURN TOKEN',
        description: 'Disco Burn Token Swap',
        dominator: 1000
    },
    {
        id: 'dft',
        icon: require('assets/img/dft.png'),
        label: 'DISCO FUD TOKEN',
        description: 'Disco Fud Token Swap',
        dominator: 1000
    }
];
