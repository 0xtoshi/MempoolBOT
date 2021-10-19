import Web3 from "web3";
import MainConfiguration from "../main";

let web3 = new Web3(MainConfiguration.RPC_ENDPOINT);
const getTx = async function(txHash:any){

    var txResult = await web3.eth.getTransaction(txHash);
    return txResult;

}


export default getTx;