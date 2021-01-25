const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const ioClient = require('socket.io-client')

const axios = require('axios');

const SocketActions = require('./constants.ts')

import {BlockChain} from '../BlockChain/blockChain'
import { Transaction } from '../BlockChain/transaction';
import {makeChainFromJSON} from './util'
import { socketListeners } from './socketListeners';



const morgan = require("morgan");
const cors = require("cors");
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

let blockChain: BlockChain = new BlockChain();


const PORT = process.env.HTTP_PORT || 4000;

// Address of your api end
const API_ADDRESS = `http://localhost:${PORT}`;

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
        io.emit(SocketActions.ADD_TRANSACTION, data);
        // const newTx: Transaction = new Transaction(data.sender, data.receiver, data.amount, data.signature)

        // // console.log("HERE")
        // // console.log(newTx)
        // blockChain.addTransaction(newTx);
        console.log(blockChain.pendingTransactions)
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

app.post("/nodes", (req: any, res: any, next: any) => {
    try {
        const address = req.body.address
        
        const {addedBack} = req.query

        const socketNode = socketListeners(ioClient(address), blockChain)
       
        blockChain.addNodes(address);
       
        if (addedBack === 'true') {
            console.info(`Added node ${address} back`)
            res.sendStatus(201)
        } else {
            axios.post(`${address}/nodes?addedBack=true`, {
                address: API_ADDRESS//`http://${req.hostname}:${PORT}`
            })
            console.info(`Added node ${address}`)
            res.sendStatus(201)
        }

    } catch (err) {
        next(err)
    }
})

io.on('connection', (socket: any) => {
    console.info(`Socket connected ID: ${socket.id}`)
    io.on("disconnect", () => {
        console.info(`Socket disconnect ID: ${socket.id}`)
    })
} )

socketListeners(ioClient(API_ADDRESS), blockChain);

// axios.post(`http://localhost:${PORT}/nodes?addedBack=true`, {
//     address: `http://localhost:${PORT}`
// })
blockChain.addNodes(API_ADDRESS)


http.listen(PORT, () => {
    console.log('The server is listening on port: ' + PORT);
})

// HTTP_PORT = 3002 npm run dev