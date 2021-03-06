const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const csController = require('../controllers/consoles')

/*Formulario para dar de alta videojuegos
router.get('/agregarVideojuego',vjController.getAgregarVideojuego)*/
//Servicio para procesar los datos del formulario CREATE
router.post('/addConsole',csController.postAddConsole)

/*Pagina de confirmacion
router.get('/confirmacionDatos',vjController.getConfirmacionDatos)*/

//Consulta de videojuegos READ
router.get('/getConsole',csController.getGetConsole)

//Delete Videogame DELETE
router.post('/deleteConsole', csController.postDeleteConsole)

//Update Videogame UPDATE
router.post('/updateConsole', csController.postUpdateConsole)

module.exports = router