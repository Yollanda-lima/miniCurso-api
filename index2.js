const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');

app.use(express.json());

//post
app.route('/').get((req, res) => res.send("hello"));
app.route('/sobre').get((req, res) => res.send("hello sobre"));

app.use(express.json());

app.route('/').post((req, res) => res.send(req.body));