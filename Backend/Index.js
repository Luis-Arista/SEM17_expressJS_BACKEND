const express = require('express')
const { lista } = require('./apiconsulta')
const cors = require( 'cors' )


const app = express()
const PORT = 3005

app.use(cors())
app.use( '/lista' , lista )




app.listen( PORT , () => {
    console.log(`Se levanto el servidor en el puerto ${PORT}`)
    console.log(`A partir de ahora puedes usar el puerto ${PORT} para ver tu Backend`)
})