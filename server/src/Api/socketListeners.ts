import { BlockChain } from '../BlockChain/blockChain';
import { Transaction } from '../BlockChain/transaction';
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
            blockChain.ioServer.emit(SocketActions.END_MINING)
        }
        
    })

    socket.on(SocketActions.END_MINING, () => {
        console.info("STOPPING MINING")
        process.env.STOP_MINING = 'stop';
    })


    
    return socket;
} 