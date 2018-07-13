"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var paginasSchema = Schema({
  ram_paginasnombre: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_media: String,
  ram_idusuario: String,
})

module.exports = mongoose.model("rt_paginas", paginasSchema);