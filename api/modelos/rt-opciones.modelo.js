"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var opcionesSchema = Schema({
  ram_opcionesnombre: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_idmenu: String,
})

module.exports = mongoose.model("rt_opciones", opcionesSchema);