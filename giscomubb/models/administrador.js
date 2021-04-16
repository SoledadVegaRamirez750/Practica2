'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const administradorSchema = Schema({
    rut_administrador: String,
    nombre_administrador: String,
    pass_administrador: String,
    email_administrador: String,
   
})

module.exports = mongoose.model('administradores', administradorSchema)