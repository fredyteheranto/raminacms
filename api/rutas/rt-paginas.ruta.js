"use strict"
// Cargamos la dependencia de Express
var express = require("express");
//Cargamos el módulo del controlador
var Controladpaginas = require("../controladores/rt-paginas.controlador.js");
// Cargamos el Router de Express.js y con esto podemos crear rutas para nuestra API REST.
var api = express.Router();
var md_aut = require("../token/aut.js");
//Creamos la ruta para crear usuarios y utilizamos el método POST
api.post("/crear-paginas",Controladpaginas.creaPaginas);
//Creamos la ruta para el ingreso de usuario y utilizamos el método POST
api.post("/paginas",Controladpaginas.vePaginas);
//Creamos la ruta para la actualización del usuario y utilizamos el método PUT
api.put("/actualizar-paginas/:id", md_aut.autenticacion, Controladpaginas.actualizaPaginas);
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-paginas/:id", md_aut.autenticacion, Controladpaginas.borraPaginas)
//EXportamos el módulo api
module.exports = api;