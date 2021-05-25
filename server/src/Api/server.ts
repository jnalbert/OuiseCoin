const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const ioClient = require('socket.io-client')

const axios = require('axios');
const fs = require('fs');

const  SocketActions  = require('./constants')
import { SocketActionsType } from './constants';

const SAs: SocketActionsType = SocketActions;

import {BlockChain} from '../BlockChain/blockChain'

import {makeChainFromJSON} from './util'
import { socketListeners } from './socketListeners';


const DEFAULT_MINING_ADDRESS = "0422654da9e7856d01642a59a8f4c8efb1721e18e62c48673c1c661b946b5d2b172e45a7880e33ecc198000eecfc1395c10995d27aad462703462f86273291fa5b";

const morgan = require("morgan");
const cors = require("cors");
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

let blockChain: BlockChain = new BlockChain(io);

// IF YOU ARE USING THIS IN DEV MODE LEAVE TRUE
const prod = false;

if (prod) {
    const fileBlockChain = makeChainFromJSON(JSON.parse(fs.readFileSync("/Users/justinalbert/Code_Projects/CryptoStuff/ouiseCoin/server/src/Api/chain.json")));

    blockChain.blockChain = fileBlockChain.blockChain
    blockChain.pendingTransactions = fileBlockChain.pendingTransactions;
    console.log("Loaded chain from file")
}

const PORT = process.env.HTTP_PORT || "4000";

// Address of your api end point
const API_ADDRESS = `http://localhost:${PORT}`;

// middle ware
app.use(cors())
app.use(morgan('dev'))
app.use(errorhandler())
app.use(bodyParser.json())

const clientListener = ioClient(API_ADDRESS);

app.get('/getLedger', (req: any, res: any, next: any) => {
    try {
        res.status(200).send(blockChain.getFullLedger())
    } catch (err) {
        next(err)
    }
    
})

app.post('/addTransaction', async (req: any, res: any, next: any) => {
    // console.log(req.body.transaction)
    // res.sendStatus(201)
    try {
        const data = JSON.parse(req.body.transaction)
        io.emit(SAs.ADD_TRANSACTION, data);
        // const newTx: Transaction = new Transaction(data.sender, data.receiver, data.amount, data.signature)

        clientListener.once(SAs.RETURN_TRANSACTION, (err: string) => {
          if (err) {
            console.log("recived transReturn")
            console.log(err);
            res.status(500).send(err);
          } else {
            res.sendStatus(201)
          }

        })

        if (blockChain.pendingTransactions.length >= 4) {
            io.emit(SAs.START_MINING, DEFAULT_MINING_ADDRESS);
          }
        // // console.log("HERE")
        // // console.log(newTx)
        // blockChain.addTransaction(newTx);
        // setTimeout(() => {
        //     console.log(blockChain.pendingTransactions)
        // }, 1000 )
      
        
    } catch (err) {
        next(err)
    }
})

app.post('/mineBlock/:miningAddress', async (req: any, res: any, next: any) => {
    try {
        io.emit(SAs.START_MINING, req.params.miningAddress);
        // blockChain.mineNewBlock(req.params.miningAddress)

        clientListener.once(SAs.RETURN_MINING, (err: string) => {
          if (err) {
            console.log("recived mining return")
            console.log(err);
            next(new Error(err));
          } else {
            res.sendStatus(201)
          }

        })
      
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
            
        } else {
            axios.post(`${address}/nodes?addedBack=true`, {
                address: API_ADDRESS//`http://${req.hostname}:${PORT}`
            })
            console.info(`Added node ${address}`)
        }
        const chainToSend = makeChainFromJSON(blockChain);
        chainToSend.ioServer = null;
        const jsonBlockChain = JSON.stringify(chainToSend);

        res.status(201).send({ nodes: blockChain.getNodes(), newBlockChain: jsonBlockChain });

    } catch (err) {
        next(err)
    }
})

app.get("/getNodes", (req: any, res: any, next: any) => {
    res.status(200).send({ nodes: blockChain.getNodes() });
})

io.on('connection', (socket: any) => {
    console.info(`Socket connected ID: ${socket.id}`)
    io.on("disconnect", () => {
        console.info(`Socket disconnect ID: ${socket.id}`)
    })
} )

socketListeners(ioClient(API_ADDRESS), blockChain);


// const initialStart = async () => {
//     if (PORT !== "4000") {
//         let sendPort = parseInt(PORT)
//         sendPort--;
        
//         const { data } = await axios.post(`http://localhost:${sendPort}/nodes?addedBack=false`, {
//             address: `http://localhost:${PORT}`
//         })

//         const { nodes } = data;
    
//         for (const node of nodes) {
//             if (node !== API_ADDRESS) {
//                 await axios.post(`${node}/nodes?addedBack=false`, {
//                     address: `http://localhost:${PORT}`
//                 })
//             }
           
//         }
//     }
// }
 
const knowAPIAddress = "http://localhost:4000"

 const initialStart = async () => {
        if (knowAPIAddress !== API_ADDRESS) {
            const { data } = await axios.post(`${knowAPIAddress}/nodes?addedBack=false`, {
                address: API_ADDRESS
            })
    
            const { nodes } = data;
            const newChain = makeChainFromJSON(JSON.parse(data.newBlockChain));
            
            
            newChain.ioServer = blockChain.ioServer;
            newChain.nodes = blockChain.nodes;

            blockChain = newChain
        
            for (const node of nodes) {
                if (node !== API_ADDRESS) {
                    await axios.post(`${node}/nodes?addedBack=false`, {
                        address: API_ADDRESS
                    })
                }
               
            }
        }
    }




// blockChain.addNodes(API_ADDRESS)


http.listen(PORT, () => {
    console.log('The server is listening on port: ' + PORT);
})

// HTTP_PORT = 3002 npm run dev

initialStart()

// Start reading from stdin so we don't exit.


process.stdin.resume();

process.on('SIGINT',  () => {
    blockChain.nodes = [];
    blockChain.ioServer = null;
  io.emit(SAs.REMOVE_NODE, API_ADDRESS);
  console.log("\nnode removed")
    if (prod && API_ADDRESS === knowAPIAddress) {
      fs.writeFileSync("/Users/justinalbert/Code_Projects/CryptoStuff/ouiseCoin/server/src/Api/chain.json", JSON.stringify(blockChain))
      console.log('\nSaved Chain');
      
    }
    process.exit(0)
    
});




