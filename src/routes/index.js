const express = require('express');
const route = express.Router();

route.get('/', function(req, res, next){
    res.send('------- Bienvenido al Api V1 😄 2024------------');
});


route.use('/persona', require('./PersonaRoute'));
route.use('/carta', require('./Carta'));
//http://localhost:3300/api/v1/carta


module.exports = route;