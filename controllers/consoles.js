const path = require('path')
const Console = require('../utils/database').models.console

/*exports.getAgregarVideojuego = (req, res)=>{
    res.send('Formulario')
}*/

exports.postAddConsole = (req, res)=>{
    console.log(req.body)
    Console.create(req.body)
    //Videojuego(sequelize).create(req.body)
    .then(result=>{
        console.log("Console created successfully")
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

exports.getGetConsole = (req, res)=>{
    Console.findAll()
        .then(vjs =>{
            console.log(vjs)
            res.json(vjs)
        })

        .catch(err =>{
            console.log(err)
            res.json({state:"error"})
        })
}

exports.postDeleteConsole = (req, res)=>{
    console.log(req.body)
    Console.destroy({
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

exports.postUpdateConsole = (req, res)=>{
    console.log(req.body)
    Console.update({
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