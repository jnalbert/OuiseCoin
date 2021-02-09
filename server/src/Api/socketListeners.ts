import { BlockChain } from '../BlockChain/blockChain';
import { Transaction } from '../BlockChain/transaction';
import { makeChainFromJSON } from './util';
const SocketActions = require('./constants.ts')

export const socketListeners = (socket: any, blockChain: BlockChain) => {

    socket.on(SocketActions.ADD_TRANSACTION, (data: any) => {
        const newTx: Transaction = new Transaction(data.sender, data.receiver, data.amount, data.signature)

        // console.log("HERE")
        // console.log(newTx)
        blockChain.addTransaction(newTx);
        console.info("ADDED TRANSACTION")
        console.info(newTx);
        
    })

    socket.on(SocketActions.START_MINING, async (miningAddress: string) => {
        const response = await blockChain.mineNewBlock(miningAddress);
        
        // process.env.STOP_MINING = "stop";
        
        if (response) {
            const chainToSend = makeChainFromJSON(blockChain)
            chainToSend.ioServer = null;
            // console.info(chainToSend);
            
            blockChain.ioServer.emit(SocketActions.END_MINING, JSON.stringify(chainToSend))
        }
        
    })

    socket.on(SocketActions.END_MINING, (newChain: string) => {
        console.info("STOPPING MINING")
        process.env.STOP_MINING = 'stop';
        console.info("REPLACING CHAIN")
        // console.log(JSON.parse(newChain))

        const tempChain: BlockChain = makeChainFromJSON(JSON.parse(newChain))
        if (tempChain.blockChain.length >= blockChain.blockChain.length && tempChain.checkChainValidity()) {

            blockChain.blockChain = tempChain.blockChain;
            console.log("CHAIN REPLACED")
        }

    })


    
    return socket;
} 