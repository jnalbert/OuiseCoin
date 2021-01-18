const SHA256 = require('crypto-js/sha256');
import { Transactions } from './types';



export class Block {
    index: number;
    date: Date;
    transactions: Transactions;
    prevHash: string;
    hash: string;
    nonce: number

    constructor(index: number, transactions: Transactions, prevHash=" ") {
        this.index = index;
        this.date = new Date;
        this.transactions =  transactions;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = this.computeHash();

    }

    computeHash() {
        return SHA256(this.index + this.date.toString() + JSON.stringify(this.transactions) + this.prevHash + this.nonce).toString();
    }

    proofOfWork(difficulty: number) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.computeHash();
            // console.log(this.nonce);
            // console.log(this)
        }

        console.log("Block mined: " + this.hash);
    }

    hasValidTransactions() {
        for(const trans of this.transactions) {
            if(!trans.isValid()) {
                return false
            }
        }

        return true;
    }
}

