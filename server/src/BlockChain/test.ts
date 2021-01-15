import { BlockChain } from './blockChain';
import {Transaction} from './transaction'
const EC = require("elliptic").ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("e9b2d244f0b74aebf0759dde6a64b7b1e3bcc1e58b0826b7cd2e4879087a7105")
const myWalletAddress = myKey.getPublic('hex')

const newChain = new BlockChain();

const tx1 = new Transaction(myWalletAddress, "This is a test", 10)
tx1.signTransaction(myKey)

newChain.addTransaction(tx1);

console.log("start mining..")
newChain.mineNewBlock(myWalletAddress)

console.log("belance of Justin: " + newChain.getBalanceOfAddress(myWalletAddress))







