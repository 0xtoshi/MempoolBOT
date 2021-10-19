import Web3 from "web3";
import MainConfiguration from "./main";
import SubmitTx from "./Web3Call/SendTX";
import swapBNB from "./swap/swapBNB";
import swapToken from "./swap/swapToken";
import { Command } from 'commander';
const program = new Command();


const web3 = new Web3(MainConfiguration.RPC_ENDPOINT);
let account = web3.eth.accounts.privateKeyToAccount(MainConfiguration.PRIVATE_KEY);
(async() => {

    program
    .option('-t, --token <type>', 'Token to Buy')
    .option('-p, --pair <type>', 'Paired (BNB BUSD)')
    .option('-a, --amount <type>', 'Amount to Buy');
    
    program.parse(process.argv);

    const options = program.opts();

    

    const token = options.token ? options.token : '--token Missing use --token="0xe9e7cea3dedca5984780bafc599bd69add087d56"';
    const pair = options.pair ? options.pair : '--pair Missing please use --pair="BUSD" or BNB '
    const amount = options.amount ? options.amount : '--amount Missing please input --amount="50"';
    const gas = web3.utils.toWei('5','Gwei');
    const gasLimit = '200000';

    console.log(token);
    console.log(pair);
    console.log(amount);
    


    if( pair == 'BUSD' ){

        let TxSwap = await swapToken(MainConfiguration.AMOUNT_BUY,
            MainConfiguration.AMOUNT_OUT_MIN,
            [MainConfiguration.CONTRACT_ADDRESS.BUSD, token],
            account.address,
            MainConfiguration.TX_DEADLINE
          ); 
          
          await SubmitTx(TxSwap, "0", gasLimit, gas);

    }else if ( pair == 'BNB' ){
        
        let TxSwap = await swapBNB(
            MainConfiguration.AMOUNT_OUT_MIN,
            [MainConfiguration.CONTRACT_ADDRESS.WBNB, token],
            account.address,
            MainConfiguration.TX_DEADLINE
          );
          
          await SubmitTx(TxSwap, MainConfiguration.AMOUNT_BUY, gasLimit, gas);

    }
})();