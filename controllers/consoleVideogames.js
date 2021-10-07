const path = require('path')
const ConsoleVideogame = require('../utils/database').models.consoleVideogame

/*exports.getAgregarVideojuego = (req, res)=>{
    res.send('Formulario')
}*/

exports.postAddConsoleVideogame = (req, res)=>{
    console.log(req.body)
    ConsoleVideogame.create(req.body)
    //Videojuego(sequelize).create(req.body)
    .then(result=>{
        console.log("Console Videogame created successfully")
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

exports.getGetConsoleVideogame = (req, res)=>{
    ConsoleVideogame.findAll()
        .then(vjs =>{
            console.log(vjs)
            res.json(vjs)
        })

        .catch(err =>{
            console.log(err)
            res.json({state:"error"})
        })
}

exports.postDeleteConsoleVideogame = (req, res)=>{
    console.log(req.body)
    ConsoleVideogame.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Console Deleted")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}

exports.postUpdateConsoleVideogame = (req, res)=>{
    console.log(req.body)
    ConsoleVideogame.update({
        nombre: req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Console Updated")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}