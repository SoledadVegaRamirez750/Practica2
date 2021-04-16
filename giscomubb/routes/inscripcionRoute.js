'use strict'

// cargamos el modulo de express para poder crear rutas 
var express = require('express');


//cargamos el controlador
var InscripcionController = require('../controllers/inscripcionController');

// llamamos al router
var api = express.Router();

//routes
api.post('/inscripcion', InscripcionController.guardar);
api.get('/inscripcion', InscripcionController.buscar);
api.delete('/inscripcion', InscripcionController.eliminar_inscripcion);


//exportamos la cofiguracion
module.exports = api;