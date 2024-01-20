const express = require('express');
const route = express.Router();
const CartaController = require('../controllers/CartaController');

route.get('/', CartaController.listadoCartas);

route.post('/', CartaController.storeCarta)

route.get('/:id', CartaController.getCarta);


route.put('/:id', CartaController.updateCarta);

route.delete('/:id', CartaController.deleteCarta);


module.exports = route;