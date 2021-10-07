const path = require('path')
const Videojuego = require('../utils/database').models.videojuego

/*exports.getAgregarVideojuego = (req, res)=>{
    res.send('Formulario')
}*/

exports.postAgregarVideojuego = (req, res)=>{
    console.log(req.body)
    Videojuego.create(req.body)
    //Videojuego(sequelize).create(req.body)
    .then(result=>{
        console.log("Videogame created successfully")
        res.json({state:"accepted"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({state:"error"})
    }) 
}

/*exports.getConfirmacionDatos = (req, res)=>{
    res.send('Confirmacion datos')
}*/

exports.getObtenerVideojuegos = (req, res)=>{
    Videojuego.findAll()
        .then(vjs =>{
            console.log(vjs)
            res.json(vjs)
        })

        .catch(err =>{
            console.log(err)
            res.json({state:"error"})
        })
}

exports.postDeleteVideogame = (req, res)=>{
    console.log(req.body)
    Videojuego.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Videogame Deleted")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}

exports.postUpdateVideogame = (req, res)=>{
    console.log(req.body)
    Videojuego.update({
        nombre: req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Videogame Updated")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}