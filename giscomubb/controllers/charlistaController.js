'use strict'
// cargamos el modelo de charlista

var Charlista = require('../models/charlista');

// funcion para guardar un charlista
function guardar(req, res) {

    // Devolvemos una respuesta en JSON
    // declaramos una variable para contener el charlista
    let charlista = new Charlista();
    // requerimos del body cada parte del json y lo guardamos 
    charlista.nombre_charlista = req.body.nombre_charlista;
    charlista.email_charlista = req.body.email_charlista;
    charlista.cargo_charlista = req.body.cargo_charlista;
    charlista.facultad_charlista = req.body.facultad_charlista;
    charlista.institucion_charlista = req.body.institucion_charlista;
    //charlista.imagen_charlista = req.body.imagen_charlista;

    charlista.save((err, charlistaguardado) => {
        // enviamos un error si no se guarda
        if (err) res.status(500).send(`Error de base de datos ${err}`)
            // efectuamos el guardado del charlista
        res.status(200).send({ charlista: charlistaguardado })
    })
}

// funcion para buscar 
async function buscar(req, res) {
    const charlista = await Charlista.find({});
    res.status(200).json(charlista);
}

//funcion para eliminar un charlista
function eliminar_charlista(req, res) {
    let id_charlista = req.query.id_charlista;
    Charlista.findById(id_charlista, (err, charlistas) => {
        if (err) res.status(500).send(`Error de base de datos ${err}`);
        charlistas.remove(err => {
            if (err) res.status(500).send(`Error de base de datos ${err}`);
            res.status(200).send('El charlista ha sido eliminado exitosamente');
        })
    })
}

// funcion para actualizar charlista
function actualizar_charlista(req, res) {
    let id_charlista = req.query.id_charlista;
    let datos = req.body;
    Charlista.findByIdAndUpdate(id_charlista, datos, (err, autores) => {
        if (err) res.status(500).send(`Error de base de datos ${err}`)
        res.status(200).send({ charlistas: charlistas })
    })
}



module.exports = { guardar, buscar, eliminar_charlista, actualizar_charlista };