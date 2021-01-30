import { Block } from '../BlockChain/block';
import { BlockChain } from '../BlockChain/blockChain';
import { Transaction } from '../BlockChain/transaction';

export const makeChainFromJSON = (jsonData: any) => {
    let targetChain = new BlockChain(null);
    let newBlockList = []
    for (const block of jsonData.blockChain) {
        let transList = []
        for (const trans of block.transactions) {
            let targetTx = new Transaction("", "" , 0, "")
            trans.date = new Date(trans.date)
            targetTx = Object.assign(targetTx, trans)
            transList.push(targetTx)
        } 
        let target = new Block(0, [], "")

        block.date = new Date(block.date)
        block.transactions = transList

        target = Object.assign(target, block)
        newBlockList.push(target)
    }
    jsonData.blockChain = newBlockList
    targetChain = Object.assign(targetChain, jsonData)
    return targetChain;
}
