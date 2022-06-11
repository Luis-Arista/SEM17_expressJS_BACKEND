const express = require('express')
const bodyParser = require( 'body-parser' ).json()
const cors = require( 'cors' )
const app = express()
const { coursesRouter , products } = require('./api')

const PORT = 4001

app.use(cors())

app.use( '/courses' , coursesRouter )

app.use( '/products' , products )

app
  .get('/', (req, res) => {
    console.log('ya se mando la respuesta')
    const { nombre, apellido , edad } = req.query
    res.send({
      message: 'esto es una peticion get',
      lastName: nombre,
      apellido: apellido,
      edad: edad
    })
  })
/*  .get('/:id', (req, res) => {
   console.log(req.params)
   res.json({
     message: req.params.id
   })
 }) */
 .post( '/login' , bodyParser , ( req , res ) => {
    console.log('--------');
    console.log(req);
    console.log('--------');
    const { email , contraseña } = req.body
    res.send({
      mail: email ,
      contraseña: contraseña
    })
 })
 
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})