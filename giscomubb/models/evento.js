'use strict'
//const { ObjectID, Timestamp } = require('bson');
//const { time } = require('console');
//Cargamos el modulo de mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventoSchema = Schema({
    titulo_evento: String,
    descripcion_evento: String,
    link: String,
    fecha_evento: String,
    hora_evento: String,
    auspicio_evento: String,
    fecha_difusion: String,
    hora_difusion: String, 
    charlista:[{type: Schema.ObjectId, ref: "charlistas"}]
})

module.exports = mongoose.model('evento', EventoSchema)