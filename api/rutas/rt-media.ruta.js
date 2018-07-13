"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var Controladomedia = require("../controladores/rt-media.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-media",Controladomedia.creaMedia);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/media",Controladomedia.veMedia);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-media/:id", md_aut.autenticacion, Controladomedia.actualizaMedia);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-media/:id", md_aut.autenticacion, Controladomedia.borraMedia)
//EXportamos el módulo api
module.exports = api;