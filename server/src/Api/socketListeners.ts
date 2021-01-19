import { isOptionalTypeNode } from 'typescript';
import { BlockChain } from '../BlockChain/blockChain';


export const socketListeners = (socket: any, chian: BlockChain) => {
    
    console.log(`Socket Id: ${socket.id} listening`)
    console.log(chian)
    return socket;
} 