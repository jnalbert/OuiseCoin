import {Block} from "./block";
import {Transaction} from './transaction'
import { BlockChainType, Transactions} from './types';

export class BlockChain {
    blockChain: BlockChainType;
    difficulty: number;
    pendingTransactions: Transactions
    miningReward: number
    nodes: any

    constructor() {
        this.nodes = new Set()
        this.blockChain = [this.createGenesisBlock()]
        this.pendingTransactions = []
        this.difficulty = 4;
        this.miningReward = 100;
    }

    private createGenesisBlock() {
        return new Block(0, [new Transaction("start", "start", 0)], " ");

    }

    getLatestBlock() {
        return this.blockChain[this.blockChain.length - 1];
    }

    getFullLedger() {
        return this.blockChain;
    }

    addNewTransaction(sender: string, receiver: string, amount: number) {
        const newTransaction = new Transaction(sender, receiver, amount)
        this.pendingTransactions.push(newTransaction)
        return "Block transaction will be in" + (this.getLatestBlock().index + 1)
        
    }

    getTransactions() {
        return this.pendingTransactions;
    }

    getNodes() {
        return this.nodes;
    }

    checkChainValidity() {
        for (let i = 1; i < this.blockChain.length; i++) {
            const currentBlock = this.blockChain[i];
            const prevBlock = this.blockChain[i - 1];

            if(!currentBlock.hasValidTransactions()) {
                return false;
            }
            
            if(currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }

            if (prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
            return true;
        }
    }

    mineNewBlock(miningRewardAddress: string) {
        this.addNewTransaction("BlockChain", miningRewardAddress, this.miningReward)

        const oldBlock = this.getLatestBlock();
        const newBlock = new Block(oldBlock.index + 1, this.pendingTransactions, oldBlock.hash);

        newBlock.proofOfWork(this.difficulty);
        this.blockChain.push(newBlock);

        this.pendingTransactions = []
    }

    getBalanceOfAddress(address: string) {
        let balance = 0;

        for (const block of this.blockChain) {
            for (const transaction of block.transactions) {
                if (transaction.sender === address) {
                    balance -= transaction.amount;
                }
                if (transaction.receiver === address) {
                    balance += transaction.amount
                }
            }
        }
        return balance;
    }
}
