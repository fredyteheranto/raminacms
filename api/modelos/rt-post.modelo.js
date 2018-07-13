"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = Schema({
  ram_postnombre: String,
  ram_postcontent: String,
  ram_postitulo: String,
  ram_posestado: String,
  ram_media: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_idusuario: String,
  ram_idcategoria: String,
  
})

module.exports = mongoose.model("rt_post", postSchema);