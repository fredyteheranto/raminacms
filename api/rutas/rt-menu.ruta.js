"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var ControladorMenu = require("../controladores/rt-menu.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-menu", ControladorMenu.crearMenu);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/menus", ControladorMenu.verMenu);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-menu/:id", md_aut.autenticacion, ControladorMenu.actualizarMenu);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-menu/:id", md_aut.autenticacion, ControladorMenu.borrarMenu)
//EXportamos el módulo api
module.exports = api;