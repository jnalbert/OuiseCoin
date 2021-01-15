import { BlockChain } from './blockChain';

const newChain = new BlockChain();

newChain.addNewTransaction("Louis", "Justin", 1000);
newChain.addNewTransaction("Justin", "Louis", 233)


newChain.mineNewBlock("Justin")

newChain.addNewTransaction("wish", "ois", 20000)

newChain.mineNewBlock("Justin")



console.log(newChain.getFullLedger())

console.log(JSON.stringify("Justin blance: " + newChain.getBalanceOfAddress("Justin")))





