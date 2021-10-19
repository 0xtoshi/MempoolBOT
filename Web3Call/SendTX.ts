import Web3 from "web3";
import MainConfiguration from "../main";

let web3 = new Web3(MainConfiguration.RPC_ENDPOINT);
const account = web3.eth.accounts.privateKeyToAccount(MainConfiguration.PRIVATE_KEY);



const SubmitTx = async function (txData:string, value:string, gas:any, gasPrice:any) {
        var status = false;
        const count = await web3.eth.getTransactionCount(account.address, "pending");
        //const gasPrice = web3.utils.toWei(MainConfiguration.GAS_PRICE, 'Gwei');
        //const gasLimit = MainConfiguration.GAS_LIMIT;
        const tx = {

            from        : account.address, 
            to          : MainConfiguration.Router, 
            gas         : web3.utils.numberToHex(gas), 
            gasPrice    : web3.utils.numberToHex(gasPrice),
            value       : web3.utils.toWei(value, 'ether'),
            data        : txData ,
            nonce       : count

          }; 

          await web3.eth.accounts.signTransaction(tx, account.privateKey).then(tx => {
            var rawTx:any = tx.rawTransaction;  
                web3.eth.sendSignedTransaction(rawTx).on('transactionHash', (receipt) => {
                   
                    console.log(receipt);
                    process.exit(0);

                });
            });


            return status;
            
        }


export default SubmitTx;