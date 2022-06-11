const express = require('express');

const ruta = express.Router();

const lista = [
    {
        id:1,
        nombre: 'PS1',
        img: 'https://static1.elcorreo.com/www/multimedia/201912/03/media/cortadas/ps1-kUNB-U908608035054iD-624x385@RC.jpg'
    },
    {
        id:2,
        nombre: 'PS2',
        img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_720x405/public/media/image/2018/09/ps2.jpg?itok=F65U_svF'
    },
    {
        id:3,
        nombre: 'PS3',
        img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2021/06/ps3-slim-2384533.jpg?itok=UiFTpZdY'
    },
    {
        id:4,
        nombre: 'PS4',
        img: 'https://media.wired.com/photos/5a99f809b4bf6c3e4d405abc/191:100/w_1280,c_limit/PS4-Pro-SOURCE-Sony.jpg'
    },
    {
        id:5,
        nombre: 'PS5',
        img: 'https://hardzone.es/app/uploads-hardzone.es/2022/04/SONY-PS5-VRR.jpg?x=480&y=375&quality=40'
    }
    
]


ruta
.get( '/' , ( req , res )=>{
    res.send(lista)
})
.get( '/:id' , ( req , res ) => {
    const { id } = req.params
    const idNum = Number(id)
    const listaById = lista.find( ( item ) => item.id === idNum )

    if(!listaById){
        res.status( 404 )
        return res.send({
            error: 'no hay nada con este id'
        })
    }else{
        res.send(listaById)
    }
})


module.exports = ruta  