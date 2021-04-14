import { BlockChain } from '../BlockChain/blockChain';
import { Transaction } from '../BlockChain/transaction';
import { makeChainFromJSON } from './util';

const SocketActions  = require('./constants')
import { SocketActionsType } from './constants';
import { Transactions } from '../BlockChain/types';



const SAs: SocketActionsType = SocketActions;

export const socketListeners = (socket: any, blockChain: BlockChain) => {
  let returnErr: null | string = null;
  socket.on(SAs.ADD_TRANSACTION, (data: any) => {
    
      try {
        const newTx: Transaction = new Transaction(data.sender, data.receiver, data.amount, data.signature)

        // console.log("HERE")
        // console.log(newTx)
        blockChain.addTransaction(newTx);
        console.info("ADDED TRANSACTION")
        console.info(newTx);
        
      } catch (err) {
        returnErr = err.message;
      }
    
    
    blockChain.ioServer.emit(SAs.RETURN_TRANSACTION, returnErr);
     
        
    })

  socket.on(SAs.START_MINING, async (miningAddress: string) => {
      try {
        const response = await blockChain.mineNewBlock(miningAddress);
        
        // process.env.STOP_MINING = "stop";
        
        if (response) {
            const chainToSend = makeChainFromJSON(blockChain)
            chainToSend.ioServer = null;
            // console.info(chainToSend);
            
            blockChain.ioServer.emit(SAs.END_MINING, JSON.stringify(chainToSend))
        }
      } catch (err) {
        returnErr = err.message;
        blockChain.ioServer.emit(SAs.RETURN_MINING, returnErr);
      }
       
      
        
    })

  socket.on(SAs.END_MINING, (newChain: string) => {
      try {
        console.info("STOPPING MINING")
        process.env.STOP_MINING = 'stop';
        console.info("REPLACING CHAIN")
        // console.log(JSON.parse(newChain))

        const tempChain: BlockChain = makeChainFromJSON(JSON.parse(newChain))

        if (tempChain.blockChain.length >= blockChain.blockChain.length && tempChain.checkChainValidity()) {

            blockChain.blockChain = tempChain.blockChain;
          console.log("CHAIN REPLACED")
          blockChain.ioServer.emit(SAs.RETURN_MINING, null);

        } else {
          blockChain.ioServer.emit(SAs.RETURN_MINING, "Chain is too short or is not valid");
        }
      } catch (err) {
        returnErr = err.message;
        blockChain.ioServer.emit(SAs.RETURN_MINING, returnErr);
      }
        

    })


    
    return socket;
} 