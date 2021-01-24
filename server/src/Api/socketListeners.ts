import { BlockChain } from '../BlockChain/blockChain';
import { Transaction } from '../BlockChain/transaction';
const SocketActions = require('./constants.ts')
export const socketListeners = (socket: any, blockChian: BlockChain) => {

    socket.on(SocketActions.ADD_TRANSACTION, (data: any) => {
        const newTx: Transaction = new Transaction(data.sender, data.receiver, data.amount, data.signature)

        console.log("HERE")
        console.log(newTx)
        blockChian.addTransaction(newTx);
    })

    
    return socket;
} 