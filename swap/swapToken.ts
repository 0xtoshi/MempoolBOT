import Web3 from "web3";
import Main from '../main';

var RouterABI = require('../ABI/PancakeRouter.json');

const swapToken = async function(amountIn:string, amountOutMin:string, path:[string,string], to:string, deadline:number){

    

    let web3 = new Web3(Main.RPC_ENDPOINT);

    var amountIn = web3.utils.toWei(amountIn, 'ether');
    var amountOutMin = web3.utils.toWei(amountOutMin, 'ether');
    let SwapContract = new web3.eth.Contract(RouterABI, Main.Router);
    let MakeSwap = SwapContract.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(
        amountIn,
        amountOutMin,
        path,
        to,
        deadline
    ).encodeABI();

    return MakeSwap;
}


export default swapToken;