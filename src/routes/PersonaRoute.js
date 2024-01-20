const express = require('express');
const route = express.Router();
const PersonaController = require('../controllers/PersonaController');

route.get('/', PersonaController.listadoPeronas);

module.exports = route;