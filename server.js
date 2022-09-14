
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('/'));


// global variables.
let Data = {};

// starting server connection. 
const port = 3000; 
app.listen(port, ()=>{console.log(`connected to server at port ${port}`)});

// routes 
app.get('/', (req, res)=>{
    console.log("got successfully");
    console.log(Data);
    // console.log(Data.body.city);
    console.log(Data.city);
    res.send(Data);
})

app.post('/', (req, res)=>{
    
    // Data.push(req.body);
    Data['city'] = req.body.city;
    Data['citnewDatey'] = req.body.newDate;
    Data['description'] = req.body.description;
    Data['degree'] = req.body.degree;
    Data['feeling'] = req.body.feeling;
    // console.log(Data);
    console.log("posted seccessfully");

})