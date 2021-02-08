import {Block} from "./block";
import {Transaction} from './transaction'
import { BlockChainType, Transactions} from './types';

export class BlockChain {
    blockChain: BlockChainType;
    difficulty: number;
    pendingTransactions: Transactions
    miningReward: number
    nodes: string[]
    ioServer: any

    constructor(ioServer: any) {
        this.nodes = []
        this.blockChain = [this.createGenesisBlock()]
        this.pendingTransactions = []
        this.difficulty = 2; // CHANGE TO FOUR WHEN DONE TESTING 
        this.miningReward = 100;
        this.ioServer = ioServer;
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

    addTransaction(transaction: Transaction) {
        if(!transaction.isValid()) {
            throw new Error("Can't add an invalid transaction to the cain")
        }
 
        this.pendingTransactions.push(transaction)
        
        
    }

    getTransactions() {
        return this.pendingTransactions;
    }

    getNodes() {
        return this.nodes;
    }

    addNodes(newNode: string) {
        for(const node of this.nodes) {
            if (node === newNode) {
                return;
            }
        }
        this.nodes.push(newNode)
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

    async mineNewBlock(miningRewardAddress: string) {

        this.addTransaction(new Transaction("BlockChain", miningRewardAddress, this.miningReward))

        const oldBlock = this.getLatestBlock();
        const newBlock = new Block(oldBlock.index + 1, this.pendingTransactions, oldBlock.hash);

        process.env.STOP_MINING = "continue";
        // setTimeout(() => {}, 8000)
        console.log("STARTING PROOF OF WORK")
        const response = await newBlock.proofOfWork(this.difficulty);
        // console.log(response)
        // console.log("PROOF OF WORK DONE")
        
        this.pendingTransactions = []
        if (response === "add") {
            this.blockChain.push(newBlock);
            return true;
        }
        return false;
        
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

    replaceChain(newChain: BlockChain) {
        if(newChain.blockChain.length <= this.blockChain.length) {
            throw new Error("The chian needs to be longer than the current one")
        }

        if(!newChain.checkChainValidity()) {
            throw new Error("Can't replace with an invalid chain")
        }

        this.blockChain = newChain.blockChain;
    }
}


