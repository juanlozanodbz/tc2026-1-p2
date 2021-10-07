const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const cvController = require('../controllers/consoleVideogames')

/*Formulario para dar de alta videojuegos
router.get('/agregarVideojuego',vjController.getAgregarVideojuego)*/
//Servicio para procesar los datos del formulario CREATE
router.post('/addConsoleVideogame',cvController.postAddConsoleVideogame)

/*Pagina de confirmacion
router.get('/confirmacionDatos',vjController.getConfirmacionDatos)*/

//Consulta de videojuegos READ
router.get('/getConsoleVideogame',cvController.getGetConsoleVideogame)

//Delete Videogame DELETE
router.post('/deleteConsoleVideogame', cvController.postDeleteConsoleVideogame)

//Update Videogame UPDATE
router.post('/updateConsoleVideogame', cvController.postUpdateConsoleVideogame)

module.exports = router