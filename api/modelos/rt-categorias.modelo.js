"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categoriasSchema = Schema({
  ram_categorianombre: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_idusuario: String,
})

module.exports = mongoose.model("rt_categorias", categoriasSchema);