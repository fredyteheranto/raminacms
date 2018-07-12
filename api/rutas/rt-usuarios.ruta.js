"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var ControladorUsuarios = require("../controladores/rt-usuarios.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-usuario", ControladorUsuarios.crearUsuarios);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/login", ControladorUsuarios.ingresoUsuario);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-usuario/:id", md_aut.autenticacion, ControladorUsuarios.actualizarUsuario);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-usuario/:id", md_aut.autenticacion, ControladorUsuarios.borrarUsuario)
//EXportamos el módulo api
module.exports = api;