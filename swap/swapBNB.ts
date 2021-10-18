import Web3 from "web3";
import Main from '../main';

var RouterABI = require('../ABI/PancakeRouter.json');

const swapBNB = async function(amountOutMin:string, path:[string,string], to:string, deadline:number){

    let web3 = new Web3(Main.RPC_ENDPOINT);
    let SwapContract = new web3.eth.Contract(RouterABI, Main.Router);
    let MakeSwap = SwapContract.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(
        amountOutMin,
        path,
        to,
        deadline
    ).encodeABI();

    return MakeSwap;
}


export default swapBNB;