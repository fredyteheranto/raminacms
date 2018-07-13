"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var plantillasSchema = Schema({
  ram_plantillasnombre: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_media: String,
  ram_idusuario: String,
})

module.exports = mongoose.model("rt_plantillas", plantillasSchema);