const express = require('express')
const app = express()

const PORT = 4005


app
  .get('/', (req, res) => {
    console.log('soy un get')
    res.send({
      message: 'soy un get'
    })
  })
   
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})