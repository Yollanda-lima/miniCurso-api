const express = require('express');

const app = express();

app.listen('3000');
app.use(express.json());

//post
app.route('/').get((req, res) => res.send("hello"));
app.route('/sobre').get((req, res) => res.send("hello sobre"));

app.use(express.json());

app.route('/').post((req, res) => res.send(req.body));

//put
let autor = "Yollanda";

app.route('/').get((req, res)=> res.send(autor));

app.route('/').put((req,res)=>{
    autor = req.body.autor;
    res.send(autor);
});


//delete
let autor = "Yollanda";

app.route('/:identidicador').delete((req, res)=>{
    res.send(req.params.identidicador);
});