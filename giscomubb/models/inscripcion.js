'use strict'
//const { ObjectID, Timestamp } = require('bson');
//const { time } = require('console');
//Cargamos el modulo de mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InscripcionSchema = Schema({
    nombre_invitado: String,
    email_invitado: String,
    empresa_invitado: String,
    cargo_invitado: String,
    evento: [{type: Schema.ObjectId, ref: "evento"}]
})

module.exports = mongoose.model('inscripciones', InscripcionSchema)