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

    async proofOfWork(difficulty: number) {
        return new Promise((resolve) => {
            setImmediate(async () => {
                this.nonce++;
                this.hash = this.computeHash();

                if (this.hash.substring(0, difficulty) === Array(difficulty + 1).join("0")) {
                    // process.env.STOP_MINING = 'stop'
                    
                    console.log("MINING DID NOT STOP EARLY")
                    console.log("Block mined: " + this.hash);
                    resolve("add");

                } else if (process.env.STOP_MINING === 'stop') {
                    console.log("BLOCK NOT MINED")
                    resolve("do not add")
                } else {
                    resolve(await this.proofOfWork(difficulty))
                } 






                // if (this.hash.substring(0, difficulty) === Array(difficulty + 1).join("0") && process.env.STOP_MINING === 'continue') {
                //     // process.env.STOP_MINING = 'stop'
                //     console.log(process.env.STOP_MINING);
                //     console.log("MINING DID NOT STOP EARLY")
                //     console.log("Block mined: " + this.hash);
                //     resolve("add");

                // } else if (process.env.STOP_MINING === 'continue' && this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
                //     resolve(await this.proofOfWork(difficulty))

                // } else if (process.env.STOP_MINING === 'stop') {
                //     console.log("MINING STOPPED EARLY")
                //     resolve("Don't Add");
                // }

                
                // while( process.env.STOP_MINING === 'continue' && this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
                //     this.nonce++;
                //     this.hash = this.computeHash();
                //     // console.log(this.nonce);
                //     // console.log(this)
                // }

                // if (this.hash.substring(0, difficulty) === Array(difficulty + 1).join("0") && process.env.STOP_MINING == 'continue') {
                //     process.env.STOP_MINING = 'stop'
                //     console.log("MINING DID NOT STOP EARLY")
                //     console.log("Block mined: " + this.hash);
                //     resolve("add");
                // }

                // if (process.env.STOP_MINING === "stop") {
                //     console.log("MINING STOPPED EARLY")
                //     resolve("Don't Add");
                // } 
              })
            
        })
        

       
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

