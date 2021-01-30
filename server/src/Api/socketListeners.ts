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

    socket.on(SocketActions.START_MINING, (miningAddress: string) => {
        const response = blockChain.mineNewBlock(miningAddress);
        if (response) {
            blockChain.ioServer.emit(SocketActions.END_MINING)
        }
        
    })

    socket.on(SocketActions.END_MINING, () => {
        console.info("STOPPING MINING")
        process.env.STOP_MINING;
        console.log();
    })


    
    return socket;
} 