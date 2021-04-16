'use strict'

//const { GridFSBucket, ObjectID } = require('mongodb');
//Cargamos el modulo de mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const charlistaSchema = Schema({
    nombre_charlista: String,
    email_charlista: String,
    cargo_charlista: String,
    facultad_charlista: String,
    institucion_charlista: String,
    //imagen_charlista: GridFSBucket
})

module.exports = mongoose.model('charlistas', charlistaSchema)