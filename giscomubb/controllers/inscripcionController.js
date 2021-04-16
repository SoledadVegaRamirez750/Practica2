'use strict'
// cargamos el modelo de evento 

var Inscripcion = require('../models/inscripcion');
//var Charlista = require('../models/charlista');

// funcion para guardar una inscripcion
function guardar(req, res) {
    // declaramos una variable para contener la inscripcion
    let inscripcion = new Inscripcion()
    // requerimos del body cada parte del json y lo guardamos 
    inscripcion.nombre_invitado = req.body.nombre_invitado
    inscripcion.email_invitado = req.body.email_invitado
    inscripcion.empresa_invitado = req.body.empresa_invitado
    inscripcion.cargo_invitado = req.body.cargo_invitado
    inscripcion.evento = req.body.idevento


    inscripcion.save((err, Inscripcionguardada) => {
        // enviamos un error si no se guarda
        if (err) return res.status(500).send(`Error de base de datos ${err}`)
            // efectuamos el guardado 
        res.status(200).send({ InscripcionRegistrada: Inscripcionguardada })
    })
}

// funcion para buscar inscripcion
async function buscar(req, res) {
    const inscripcion = await Inscripcion.find({});
    res.status(200).json(inscripcion);
}




//funcion para eliminar una inscripcion
function eliminar_inscripcion(req, res) {
    let id_inscripcion = req.query.id_inscripcion;
    Inscripcion.findById(id_inscripcion, (err, inscripcion) => {
        if (err) res.status(500).send(`Error de base de datos ${err}`);
        inscripcion.remove(err => {
            if (err) res.status(500).send(`Error de base de datos ${err}`);
            res.status(200).send('La inscripcion ha sido eliminada exitosamente');
        })
    })
}


module.exports = { guardar, buscar, eliminar_inscripcion };