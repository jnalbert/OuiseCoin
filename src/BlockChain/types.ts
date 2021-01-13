import {Block} from "./block"

export interface Transaction {
    sender: string,
    receiver: string,
    amount: number
}

export type BlockData = Transaction[]

export type BlockChainType = Block[];