
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static('express'));


// global variables.
let Data =[];

// starting server connection. 
const port = 3000; 
app.listen(port, ()=>{console.log(`connected to server at port ${port}`)});

// routes 
app.get('/', (req, res)=>{
    res.send(Data);
})

app.post('/', (req, res)=>{
    Data.push(req.body);
})
