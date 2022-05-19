const express = require('express');
const app = express();
const {port} = require('./config')
const superheroesRouters = require('./src/routes/superheroes')
const habilidadesRouters = require('./src/routes/habilidades')
const misionesMRRouters = require('./src/routes/misionesMR')
const misionesMSURouters = require('./src/routes/misionesMSU')

app.use(express.json())

app.use('/superheroes', superheroesRouters)
app.use('/habilidades', habilidadesRouters)
app.use('/misionesMR', misionesMRRouters)
app.use('/misionesMSU', misionesMSURouters)

app.listen(port,() =>{
    console.log('Servidor escuchando en puerto', port)
})