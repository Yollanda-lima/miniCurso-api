const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');
//delete
let autor = "Yollanda";

app.route('/:identidicador').delete((req, res)=>{
    res.send(req.params.identidicador);
});