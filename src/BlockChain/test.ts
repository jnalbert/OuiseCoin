import { BlockChain } from './blockChain';

const newChain = new BlockChain();

newChain.addNewTransaction("Louis", "Justin", 1000);
newChain.addNewTransaction("Matthew", "justion", 5000)

console.time()
newChain.mineNewBlock()
console.timeEnd()
newChain.addNewTransaction("wish", "ois", 20000)

console.time()
newChain.mineNewBlock()
console.timeEnd()


console.log(newChain.getFullLedger()) 

newChain.blockChain[1].data[0].amount = 10000000;

if (newChain.checkChainValidity()) {
    console.log("valid")
} else {
    console.log("not valid")
}



