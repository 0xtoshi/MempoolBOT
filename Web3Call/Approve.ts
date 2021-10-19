import SubmitTx from "./SendTX";
import Web3 from "web3";
import MainConfiguration from "../main";

const web3 = new Web3(MainConfiguration.RPC_ENDPOINT);
let ABI = require('../ABI/Approve.json');
const account = web3.eth.accounts.privateKeyToAccount(MainConfiguration.PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

const Approve = async function(tokenAddress:any){

    let ApproveContract = new web3.eth.Contract(ABI, tokenAddress);
    const Allowance = await ApproveContract.methods.approve(MainConfiguration.Router, (2^256 - 1 )).send({
        from : account.address,
        gas : '100000',
        gasPrice : web3.utils.toWei('5','Gwei')
    });

    return Allowance;

}