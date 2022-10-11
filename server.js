
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./Website'));


// global variables.
let Data = {};

// starting server connection. 
const port = 3000; 
app.listen(port, ()=>{console.log(`connected to server at port ${port}`)});

// routes 
app.get('/get_weather_data', (req, res)=>{
    // console.log("got successfully");
    // console.log(Data);
    // console.log(Data.body.city);
    // console.log(Data.city);
    res.send(Data);
})

app.post('/send_weather_data', (req, res)=>{
    
    // Data.push(req.body);
    console.log(Data);
    Data['city'] = req.body.city;
    Data['citnewDatey'] = req.body.citnewDatey ;
    Data['description'] = req.body.description;
    Data['degree'] = req.body.degree;
    Data['UserFeeling'] = req.body.UserFeeling;
    // console.log("posted seccessfully");

})
