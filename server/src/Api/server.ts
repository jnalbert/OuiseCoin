const express = require('express');

import {BlockChain} from '../BlockChain/blockChain'
import { Transaction } from '../BlockChain/transaction';
import {makeChainFromJSON} from './util'

const morgan = require("morgan");
const cors = require("cors");
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

let blockChain: BlockChain = new BlockChain();

const app = express();
const PORT = process.env.HTTP_PORT || 4000;

// middle ware
app.use(cors())
app.use(morgan('dev'))
app.use(errorhandler())
app.use(bodyParser.json())

app.get('/getLedger', (req: any, res: any, next: any) => {
    try {
        res.status(200).send(blockChain.getFullLedger())
    } catch (err) {
        next(err)
    }
    
})

app.post('/addTransaction', (req: any, res: any, next: any) => {
    // console.log(req.body.transaction)
    // res.sendStatus(201)
    try {
        const data = JSON.parse(req.body.transaction)
        const newTx: Transaction = new Transaction(data.sender, data.receiver, data.amount, data.signature)

        // console.log("HERE")
        // console.log(newTx)
        blockChain.addTransaction(newTx);
        // console.log(blockChain.pendingTransactions)
        res.sendStatus(201)
    } catch (err) {
        next(err)
    }
})

app.get('/mineBlock/:miningAddress', (req: any, res: any, next: any) => {
    try {
        blockChain.mineNewBlock(req.params.miningAddress)
        res.status(200).send(blockChain.getLatestBlock())
    } catch (err) {
        next(err)
    }
})

app.get('/getAddressBalance/:pubAddress', (req: any, res: any, next: any) => {
    try {
        const pubAddress = req.params.pubAddress
        // console.log("HERE")
        // console.log(typeof pubAddress)
        const balance = blockChain.getBalanceOfAddress(pubAddress)
        res.status(200).send({balance: balance})
    } catch (err) {
        next(err)
    }
})

app.post('/replaceChain', (req: any, res: any, next: any) => {
    try {
        const data = JSON.parse(req.body.newChian)
        const newChain = makeChainFromJSON(data)
        
        blockChain = newChain
        res.sendStatus(201)
    } catch (err) {
        next(err)
    }
})


app.listen(PORT, () => {
    console.log('The server is listening on port: ' + PORT);
})

// HTTP_PORT = 3002 npm run dev