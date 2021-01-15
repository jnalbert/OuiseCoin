import {Block} from "./block"
import {Transaction} from './transaction'
// export interface Transaction {
//     sender: string,
//     receiver: string,
//     amount: number,
//     date: Date
// }

export type Transactions = Transaction[]

export type BlockChainType = Block[];