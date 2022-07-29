const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');
//put
let autor = "Yollanda";

app.route('/').get((req, res)=> res.send(autor));

app.route('/').put((req,res)=>{
    autor = req.body.autor;
    res.send(autor);
});