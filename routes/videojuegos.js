const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/videojuegos')

/*Formulario para dar de alta videojuegos
router.get('/agregarVideojuego',vjController.getAgregarVideojuego)*/
//Servicio para procesar los datos del formulario CREATE
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)

/*Pagina de confirmacion
router.get('/confirmacionDatos',vjController.getConfirmacionDatos)*/

//Consulta de videojuegos READ
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)

//Delete Videogame DELETE
router.post('/deleteVideogame', vjController.postDeleteVideogame)

//Update Videogame UPDATE
router.post('/updateVideogame', vjController.postUpdateVideogame)

module.exports = router