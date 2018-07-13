"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var menuSchema = Schema({
  ram_menunombre: String,
  ram_fchacreacion: String,
  ram_fchaactuali: String,
  ram_iduser: String,
})

module.exports = mongoose.model("rt_menu", menuSchema);