const express = require('express');
//router

const router = express.Router();

const courses = [
    {
      id: 1,
      name: 'Introducción al análisis matemático',
      clave: '123-213',
      objetive: 'lorem ipsum',
      description: 'Esta es una descripción'
    },
    {
      id: 2,
      name: 'Algoritmos 1',
      clave: 'LVM09876',
      description: 'Foo -bar y así',
      grade: '3'
    }
  ]


  router
  .get( '/' , ( req , res ) => {
    res.send(courses)
  })
  .get( '/:id' , ( req , res ) => {
    const { id } = req.params
    const idNum =  Number(id)

    const courseById = courses.find( item => item.id === idNum )

    if (!courseById){
        res.status(404)
        return res.send({
            error: 'no hay nada'
        })

    }else{
        res.send(courseById)
    }
  })


  module.exports = router