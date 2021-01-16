const SHA256 = require('crypto-js/sha256');
const EC = require("elliptic").ec;
const ec = new EC('secp256k1');

export class Transaction {
    sender: string
    receiver: string
    amount: number
    date: Date
    signature: any

    constructor(sender: string, receiver: string, amount: number) {
        this.sender = sender;
        this.receiver = receiver
        this.amount = amount
        this.date = new Date
    }

    calculateHash(): string {
        return SHA256(this.sender + this.receiver + this.amount + this.date).toString()
    }


    signTransaction(signingKey: any) {
        if (signingKey.getPublic('hex') !== this.sender) {
            throw new Error("You can't sign transactions they are no yours")
        }

        const hash = this.calculateHash()
        const sig = signingKey.sign(hash, 'base64')
        this.signature = sig.toDER('hex')
    }

    isValid() {
        if (this.sender === "BlockChain") return true;

        if (!this.signature || this.signature.length === 0) {
            throw new Error("This transaction has not been signed")
        }

        const publicKey = ec.keyFromPublic(this.sender, "hex")
        return publicKey.verify(this.calculateHash(), this.signature)
        
    }
}