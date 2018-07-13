"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var Controladopost = require("../controladores/rt-post.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-post",Controladopost.creaPost);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/post",Controladopost.vePost);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-post/:id", md_aut.autenticacion, Controladopost.actualizaPost);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-post/:id", md_aut.autenticacion, Controladopost.borraPost)
//EXportamos el módulo api
module.exports = api;