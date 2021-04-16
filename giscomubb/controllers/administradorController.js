'use strict'
// cargamos el modelo de administrador

var Administrador = require('../models/administrador');

// funcion para guardar una administrador
function guardar(req, res) {

    let administrador = new Administrador();

    administrador.rut_administrador = req.body.rut_administrador;
    administrador.nombre_administrador = req.body.nombre_administrador;
    administrador.pass_administrador = req.body.pass_administrador;
    administrador.email_administrador = req.body.email_administrador;

    administrador.save((err, administradorguardado) => {
        // enviamos un error si no se guarda
        if (err) res.status(500).send(`Error de base de datos ${err}`)
            // efectuamos el guardado de administrador
        res.status(200).send({ administrador: administradorguardado })
    })
}

// funcion para buscar administrador
async function buscar(req, res) {
    const administrador = await Administrador.find({});
    res.status(200).json(administrador);
}


//funcion para eliminar un administrador
function eliminar_administrador(req, res) {
    let id_administrador = req.query.id_administrador;
    Persona.findById(id_administrador, (err, administradores) => {
        if (err) res.status(500).send(`Error de base de datos ${err}`);
        administradores.remove(err => {
            if (err) res.status(500).send(`Error de base de datos ${err}`);
            res.status(200).send('La persona ha sido eliminado exitosamente');
        })
    })
}

// funcion para actualizar administrador
function actualizar_administrador(req, res) {
    let id_administrador = req.query.id_administrador;
    let datos = req.body;
    Administrador.findByIdAndUpdate(id_administrador, datos, (err, admnistradores) => {
        if (err) res.status(500).send(`Error de base de datos ${err}`)
        res.status(200).send({ administradores: administradores })
    })
}


module.exports = { guardar, buscar, eliminar_administrador, actualizar_administrador };
