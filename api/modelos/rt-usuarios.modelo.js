"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsuariosSchema = Schema({
  ram_usuario: String,
  ram_password: String,
  ram_email: String,
  ram_nombres: String,
  ram_fchcreacion: String,
  ram_fchactualiz: String,
  ram_login: String,
  ram_estado: String
})

module.exports = mongoose.model("rt_usuarios", UsuariosSchema);