"use strict"
const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var rutaUsuarios = require("./rutas/rt-usuarios.ruta.js");
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
module.exports = app;