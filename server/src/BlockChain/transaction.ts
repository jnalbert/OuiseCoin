

export class Transaction {
    sender: string
    receiver: string
    amount: number
    date: Date

    constructor(sender: string, receiver: string, amount: number) {
        this.sender = sender;
        this.receiver = receiver
        this.amount = amount
        this.date = new Date
    }
}