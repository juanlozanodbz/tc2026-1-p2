const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/consoles')

/*Formulario para dar de alta videojuegos
router.get('/agregarVideojuego',vjController.getAgregarVideojuego)*/
//Servicio para procesar los datos del formulario CREATE
router.post('/addConsole',vjController.postAddConsole)

/*Pagina de confirmacion
router.get('/confirmacionDatos',vjController.getConfirmacionDatos)*/

//Consulta de videojuegos READ
router.get('/getConsole',vjController.getGetConsole)

//Delete Videogame DELETE
router.post('/deleteConsole', vjController.postDeleteConsole)

//Update Videogame UPDATE
router.post('/updateConsole', vjController.postUpdateConsole)

module.exports = router