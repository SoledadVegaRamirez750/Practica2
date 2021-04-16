'use strict'

// cargamos el modulo de express para poder crear rutas 
var express = require('express');
// llamamos al router
var api = express.Router();

//cargamos el controlador
var charlistaController = require('../controllers/charlistaController');

//routes
api.post('/charlista', charlistaController.guardar);
api.get('/charlista', charlistaController.buscar);
api.delete('/charlista', charlistaController.eliminar_charlista);
api.put('/charlista', charlistaController.actualizar_charlista);

//exportamos la cofiguracion
module.exports = api;