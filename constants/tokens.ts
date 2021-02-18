const TOKENS = {
    DAI: {
        name: 'Dai Stable coin',
        address: '0xC4375B7De8af5a38a93548eb8453a498222C4fF2',
        image: 'https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png'
    },
    MKR: {
        name: 'Maker',
        address: '0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD',
        image: 'https://tokens.1inch.exchange/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png'
    },
    WETH: {
        name: 'Wrapped Ether',
        address: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        image: 'https://tokens.1inch.exchange/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png'
    },
    SALT: {
        name: 'Salt',
        address: '0x6fEE5727EE4CdCBD91f3A873ef2966dF31713A04',
        image: 'https://tokens.1inch.exchange/0x4156d3342d5c385a87d264f90653733592000581.png'
    },
    KNC: {
        name: 'KyberNetwork',
        address: '0xad67cB4d63C9da94AcA37fDF2761AaDF780ff4a2',
        image: 'https://tokens.1inch.exchange/0xdd974d5c2e2928dea5f71b9825b8b646686bd200.png'
    },
    OMG: {
        name: 'OmiseGO',
        address: '0xdB7ec4E4784118D9733710e46F7C83fE7889596a',
        image: 'https://tokens.1inch.exchange/0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png'
    },
    MANA: {
        name: 'Mana',
        address: '0xcb78b457c1F79a06091EAe744aA81dc75Ecb1183',
        image: 'https://tokens.1inch.exchange/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png'
    },
    PSU: {
        name: 'PSU COIN',
        address: '0x0d01bc6041ac8f72e1e4b831714282f755012764',
        image: 'data:image/png;base64,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'
    }
}

export default TOKENS;