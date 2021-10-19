import Web3 from "web3";
import swapToken from "./swap/swapToken";
import swapBNB from "./swap/swapBNB";
import SubmitTx from "./Web3Call/SendTX";
import MainConfiguration from "./main";
import getTx from "./Web3Call/getTX";

let web3 = new Web3(MainConfiguration.WSS_ENDPOINT);
let account = web3.eth.accounts.privateKeyToAccount(MainConfiguration.PRIVATE_KEY);

(async() => {


  web3.eth.subscribe('pendingTransactions', async(error,transactionHash) => {

 
      if(!error){ 

         let txHash = await getTx(transactionHash);
          let BindFrom = MainConfiguration.LIQUIDITY_PROVIDER_ADDR.toLowerCase();
          let BindTo = MainConfiguration.Router.toLowerCase();

            if(txHash?.from?.toLowerCase() == BindFrom && txHash?.to?.toLowerCase() == BindTo){
                
              console.log('Probability Liquidity Was Added');
              console.log('Sending Same TX in Mempool!');

              var gas = txHash.gas;
              var gasLimit = txHash.gasPrice;

              if( MainConfiguration.BUYWITH == 'BUSD') {
                
                  let TxSwap = await swapToken(MainConfiguration.AMOUNT_BUY,
                    MainConfiguration.AMOUNT_OUT_MIN,
                    [MainConfiguration.CONTRACT_ADDRESS.BUSD, MainConfiguration.TOKEN_TO_BUY],
                    account.address,
                    MainConfiguration.TX_DEADLINE
                  ); 
                  
                  await SubmitTx(TxSwap, "0", gas, gasLimit);
                  

                } else if ( MainConfiguration.BUYWITH == 'BNB' ){

                  let TxSwap = await swapBNB(
                    MainConfiguration.AMOUNT_OUT_MIN,
                    [MainConfiguration.CONTRACT_ADDRESS.WBNB, MainConfiguration.TOKEN_TO_BUY],
                    account.address,
                    MainConfiguration.TX_DEADLINE
                  );
                  
                  await SubmitTx(TxSwap, MainConfiguration.AMOUNT_BUY, gas, gasLimit);
                  

                }

                
            }

            

      }

  

  })

    




    

})();