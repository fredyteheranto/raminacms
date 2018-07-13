"use strict"
const express = require("express");
const bodyParser = require("body-parser");
var app = express();

var rutaUsuarios = require("./rutas/rt-usuarios.ruta.js");
var rutaMenu = require("./rutas/rt-menu.ruta.js");
var rutaOpciones = require("./rutas/rt-opciones.ruta.js");
var rutaMedia = require("./rutas/rt-media.ruta.js");
var rutaCategorias = require("./rutas/rt-categorias.ruta.js");
var rutaPost = require("./rutas/rt-post.ruta.js");
var rutaPlantillas = require("./rutas/rt-plantillas.ruta.js");
var rutaModulos = require("./rutas/rt-modulos.ruta.js");
var rutaPaginas = require("./rutas/rt-paginas.ruta.js");

var rutaLinks = require("./rutas/rt-links.ruta.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//$GetCurrent

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Allow", "GET, POST, PUT, DELETE");
  next();
});
// Usuario
app.use("/api", rutaUsuarios);
app.use("/api", rutaMenu);
app.use("/api", rutaOpciones);
app.use("/api", rutaMedia);
app.use("/api", rutaCategorias);
app.use("/api", rutaPost);
app.use("/api", rutaPlantillas);
app.use("/api", rutaModulos);
app.use("/api", rutaPaginas);
app.use("/api", rutaLinks);

module.exports = app;