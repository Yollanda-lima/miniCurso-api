const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');

app.route('/').get((red, res)=>{
    axios.get('https://api.github.com/users/Yollanda-lima')
    .then(result=>res.send(result.data))
    .catch(error=>console.error(error));
    
})






