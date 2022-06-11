const express = require('express');

const rutas = express.Router();

const products = [
    {
        id:1,
        nombre:'Mesa',
        precio:'1,500.00'
    },
    {
        id:2,
        nombre:'Jarra',
        precio:'600.00'
    },
    {
        id:3,
        nombre:'Tele',
        precio:'15,000.00'
    },
    {
        id:4,
        nombre:'Sillon',
        precio:'10,000.00'
    },
    
]

rutas
    .get( '/' , ( req , res ) => {
        res.send( products )
    })
    .get ( '/:id' , ( req , res) => {
        const { id } = req.params
        const idNum = Number(id)
        const productsById = products.find( ( item ) => item.id === idNum)

        if(!productsById){
            res.status( 404 )
            return res.send({
                error: 'no se encontro nada con ese id'
            })
        }else{
            res.send(productsById)
        }
    })


    module.exports = rutas