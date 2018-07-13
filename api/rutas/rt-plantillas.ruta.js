"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var Controladoplantillas = require("../controladores/rt-plantillas.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-plantillas",Controladoplantillas.creaPlantillas);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/plantillas",Controladoplantillas.vePlantillas);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-plantillas/:id", md_aut.autenticacion, Controladoplantillas.actualizaPlantillas);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-plantillas/:id", md_aut.autenticacion, Controladoplantillas.borraPlantillas)
//EXportamos el módulo api
module.exports = api;