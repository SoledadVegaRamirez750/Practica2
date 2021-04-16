'use strict'

// cargamos el modulo de express para poder crear rutas 
var express = require('express');
// llamamos al router
var api = express.Router();

//cargamos el controlador
var administradorController = require('../controllers/administradorController');

//routes
api.post('/administrador', administradorController.guardar);
api.get('/administrador', administradorController.buscar);
api.delete('/administrador', administradorController.eliminar_administrador);
api.put('/administrador', administradorController.actualizar_administrador);

//exportamos la cofiguracion
module.exports = api;