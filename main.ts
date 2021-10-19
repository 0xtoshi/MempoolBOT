let MainConfiguration = {

    Router : '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    RPC_ENDPOINT : 'https://shy-muddy-log.bsc.quiknode.pro/de9022e6dfc8f7c6b5701a71c5878cdf2c327ade/',
    //RPC_ENDPOINT : 'https://nd-598-602-365.p2pify.com/0a6f4e1e0603d1c801d49632d32eace6',
    //WSS_ENDPOINT : 'wss://shy-muddy-log.bsc.quiknode.pro/de9022e6dfc8f7c6b5701a71c5878cdf2c327ade/',
    WSS_ENDPOINT : 'wss://shy-muddy-log.bsc.quiknode.pro/de9022e6dfc8f7c6b5701a71c5878cdf2c327ade/',
    CONTRACT_ADDRESS : {
        WBNB : '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        BUSD : '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    PRIVATE_KEY : '',
    GAS_LIMIT : 500000,
    GAS_PRICE : '7', // 5 GWEI
    TX_DEADLINE : Math.floor(Date.now() / 1000) + 60 * 1, //1 Minutes


    AMOUNT_BUY : '0.1',
    AMOUNT_OUT_MIN : '0',

    BUYWITH : 'BNB', //BNB OR BUSD

    TOKEN_TO_BUY : '0x6F90aFE76F4bcD44CF6f93B4Bb5c20DEFC653375',
    LIQUIDITY_PROVIDER_ADDR : '0x9c790715C3c25322E9B10cbA208891ee093EBC56',



}


export default MainConfiguration;