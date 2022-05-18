const express = require('express');
const app = express();
const {port} = require('./config')
const superheroesRouters = require('./src/routes/superheroes')
const habilidadesRouters = require('./src/routes/habilidades')
const misionesRouters = require('./src/routes/misiones')

app.use('/superheroes', superheroesRouters)
app.use('/habilidades', habilidadesRouters)
app.use('/misiones', misionesRouters)

app.listen(port,() =>{
    console.log('Servidor escuchando en puerto', port)
})