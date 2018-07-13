"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var Controladocategoria = require("../controladores/rt-categorias.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-categoria",Controladocategoria.creaCategoria);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/categoria",Controladocategoria.veCategoria);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-categoria/:id", md_aut.autenticacion, Controladocategoria.actualizaCategoria);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-categoria/:id", md_aut.autenticacion, Controladocategoria.borraCategoria)
//EXportamos el módulo api
module.exports = api;