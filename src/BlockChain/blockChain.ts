import {Block} from "./block";
import {BlockChainType, BlockData, Transaction} from "./types"

export class BlockChain {
    blockChain: BlockChainType;
    difficulty: number;
    waitingTransactions: BlockData
    nodes: any

    constructor() {
        this.nodes = new Set()
        this.blockChain = [this.createGenesisBlock()]
        this.waitingTransactions = []
        this.difficulty = 4;
    }

    private createGenesisBlock() {
        return new Block(0, [{sender: "Start", receiver: "start", amount: 0}], " ");

    }

    getLatestBlock() {
        return this.blockChain[this.blockChain.length - 1];
    }

    getFullLedger() {
        return this.blockChain;
    }

    addNewTransaction(sender: string, receiver: string, amount: number) {
        this.waitingTransactions.push({
            sender: sender,
            receiver: receiver,
            amount: amount
        })
        return "Block transaction will be in" + (this.getLatestBlock().index - 1)
        
    }

    getTransactions() {
        return this.waitingTransactions;
    }

    getNodes() {
        return this.nodes;
    }

    checkChainValidity() {
        for (let i = 1; i < this.blockChain.length; i++) {
            const currentBlock = this.blockChain[i];
            const prevBlock = this.blockChain[i - 1];
            
            if(currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }

            if (prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
            return true;
        }
    }

    mineNewBlock() {
        const oldBlock = this.getLatestBlock();
        const newBlock = new Block(oldBlock.index + 1, this.waitingTransactions, oldBlock.hash);
        newBlock.proofOfWork(this.difficulty);
        this.blockChain.push(newBlock);
        this.waitingTransactions = []
    }
}
