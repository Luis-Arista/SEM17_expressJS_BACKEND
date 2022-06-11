// 1.- importar mis dependencias
const express = require('express')

// 2.- creo el objeto de mi aplicacion
const app = express()
const PORT = 4000




//3.- defino mis rutas
// req = request | representa la peticion
// res =  response | representa la respuesta que voy a regresar
app.use( '/' , ( req , res ) => {
    res.send({
        message: 'Hola Mundo'
    })
} )

// levantar el servidor de mi app
app.listen(PORT , () => {
    console.log(`el servidor esta corriendo en el puetrto ${PORT}`)
})