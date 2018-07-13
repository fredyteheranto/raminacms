"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var linksSchema = Schema({
  ram_linksnombre: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_type: String,
  ram_idusuario: String,
})

module.exports = mongoose.model("rt_links", linksSchema);