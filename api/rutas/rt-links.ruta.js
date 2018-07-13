"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var Controladlinks = require("../controladores/rt-links.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-links",Controladlinks.creaLinks);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/links",Controladlinks.veLinks);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-links/:id", md_aut.autenticacion, Controladlinks.actualizaLinks);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-links/:id", md_aut.autenticacion, Controladlinks.borraLinks)
//EXportamos el módulo api
module.exports = api;