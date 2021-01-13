const SHA256 = require('crypto-js/sha256');
import {BlockData} from './types';



export class Block {
    index: number;
    timeStamp: Date;
    data: BlockData;
    prevHash: string;
    hash: string;
    nonce: number

    constructor(index: number, data: BlockData, prevHash=" ") {
        this.index = index;
        this.timeStamp = new Date;
        this.data =  data;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = this.computeHash();

    }

    computeHash() {
        return SHA256(this.index + this.timeStamp.toString() + JSON.stringify(this.data) + this.prevHash + this.nonce).toString();
    }

    proofOfWork(difficulty: number) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.computeHash();
            // console.log(this.nonce);
            // console.log(this)
        }
    }
}
