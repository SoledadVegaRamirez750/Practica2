'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

 //var cors = require('cors')
 //app.use(cors())
 //app.options('*', cors());

 var charlista_route = require('./routes/charlistaRoute'); 
 var evento_route = require('./routes/eventoRoute');
 var administrador_route = require('./routes/administradorRoute');
 var inscripcion_route = require('./routes/inscripcionRoute');




const mongoose = require('mongoose')




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api',charlista_route);
app.use('/api',evento_route);
app.use('/api',inscripcion_route);
app.use('/api',administrador_route);



//mongodb+srv://GiscomEventos:123giscom456@cluster0.mv35p.mongodb.net/Eventos?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://GiscomEventos:123giscom456@cluster0.mv35p.mongodb.net/Eventos?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    app.listen(9000, () => {

        console.log("Esta corriendo en puerto 9000")
    })
})