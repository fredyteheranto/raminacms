"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var ControladorOpcion = require("../controladores/rt-opciones.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-opcion",ControladorOpcion.creaOpciones);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/opcion",ControladorOpcion.veOpciones);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-opcion/:id", md_aut.autenticacion, ControladorOpcion.actualizaOpciones);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-opcion/:id", md_aut.autenticacion, ControladorOpcion.borraOpciones)
//EXportamos el módulo api
module.exports = api;