let MainConfiguration = {

    Router : '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    RPC_ENDPOINT : 'https://shy-muddy-log.bsc.quiknode.pro/de9022e6dfc8f7c6b5701a71c5878cdf2c327ade/',
    //WSS_ENDPOINT : 'wss://shy-muddy-log.bsc.quiknode.pro/de9022e6dfc8f7c6b5701a71c5878cdf2c327ade/',
    WSS_ENDPOINT : 'wss://ws-nd-897-843-655.p2pify.com/f6f8b9b575e54ef0ad0ccdbe6ed3ee72',
    CONTRACT_ADDRESS : {
        WBNB : '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        BUSD : '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    PRIVATE_KEY : '',
    GAS_LIMIT : 500000,
    GAS_PRICE : '5', // 5 GWEI
    TX_DEADLINE : Math.floor(Date.now() / 1000) + 60 * 1, //1 Minutes


    AMOUNT_BUY : '1',
    AMOUNT_OUT_MIN : '0',

    BUYWITH : 'BUSD', //BNB OR BUSD

    TOKEN_TO_BUY : '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    LIQUIDITY_PROVIDER_ADDR : '0x0d55e4d76B8AbACf71d2eECEB7b3C37eec2A74f5',



}


export default MainConfiguration;