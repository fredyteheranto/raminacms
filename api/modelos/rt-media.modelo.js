"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mediaSchema = Schema({
  ram_medianombre: String,
  ram_mediafile: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_idusuario: String,
})

module.exports = mongoose.model("rt_media", mediaSchema);