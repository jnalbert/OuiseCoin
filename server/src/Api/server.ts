const express = require('express');

const morgan = require("morgan");
const cors = require("cors");
const errorhandler = require('errorhandler');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.HTTP_PO || 4000;

// middle ware
app.use(cors())
app.use(morgan('dev'))
app.use(errorhandler())
app.use(bodyParser.json())




app.listen(PORT, () => {
    console.log('The server is listening on port: ' + PORT);
})

// HTTP_PORT = 3002 npm run dev