'use strict'

// cargamos el modulo de express para poder crear rutas 
var express = require('express');


//cargamos el controlador
var EventoController = require('../controllers/eventoController');

// llamamos al router
var api = express.Router();

//routes
api.post('/evento', EventoController.guardar);
api.get('/evento', EventoController.buscar);
api.delete('/evento', EventoController.eliminar_evento);
api.put('/evento', EventoController.actualizar_evento);

//exportamos la cofiguracion
module.exports = api;