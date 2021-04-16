'use strict'
// cargamos el modelo de evento 

var Evento = require('../models/evento');
//var Charlista = require('../models/charlista');

// funcion para guardar un evento
function guardar(req, res) {
    // declaramos una variable para contener el evento
    let evento = new Evento()
    // requerimos del body cada parte del json y lo guardamos 
    evento.titulo_evento = req.body.titulo_evento
    evento.descripcion_evento = req.body.descripcion_evento
    evento.link = req.body.link
    evento.fecha_evento = req.body.fecha_evento
    evento.hora_evento = req.body.hora_evento
    evento.auspicio_evento = req.body.auspicio_evento
    evento.fecha_difusion = req.body.fecha_difusion
    evento.hora_difusion = req.body.hora_difusion
    evento.charlista = req.body.idcharlista

    evento.save((err, Eventoguardado) => {
        // enviamos un error si no se guarda
        if (err) return res.status(500).send(`Error de base de datos ${err}`)
            // efectuamos el guardado 
        res.status(200).send({ EventoRegistrado: Eventoguardado })
    })
}

// funcion para buscar evento
async function buscar(req, res) {
    const evento = await Evento.find({});
    res.status(200).json(evento);
}




//funcion para eliminar un evento
function eliminar_evento(req, res) {
    let id_evento = req.query.id_evento;
    Evento.findById(id_evento, (err, eventos) => {
        if (err) res.status(500).send(`Error de base de datos ${err}`);
        eventos.remove(err => {
            if (err) res.status(500).send(`Error de base de datos ${err}`);
            res.status(200).send('El evento ha sido eliminado exitosamente');
        })
    })
}

// funcion para actualizar evento
function actualizar_evento(req, res) {
    let id_evento = req.query.id_evento;
    let datos = req.body;
    Evento.findByIdAndUpdate(id_evento, datos, (err, eventos) => {
        if (err) res.status(500).send(`Error de base de datos ${err}`)
        res.status(200).send({ eventos: eventos })
    })
}

module.exports = { guardar, buscar, eliminar_evento, actualizar_evento };