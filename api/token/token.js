"use strict"

//Requerimos la dependencia jwt-simple para crear el token
var token = require("jwt-simple");

//Moment: Esta dependencia nos permite hacer registro de fecha de creación del token y la fecha de expiración de ese mismo token
var momento = require("moment");

//Con esta clave secreta podemos descodificar el token
var claveSecreta = "Raminaxctshas54snhbvdik--spdkjhgbrghjd**dddTeheran";

/*=============================================
MÉTODO DEL TOKEN
=============================================*/

exports.crearToken = function(seleccionUsuario){
	var cargarToken = {
		//Se usa para guardar el id del objeto
		sub: seleccionUsuario._id,
		nombre: seleccionUsuario.ram_usuario,
		//unix() formato timestamp actual
		now: momento().unix(),
		exp: momento().add(30, "days").unix()
	}
	// Devolvemos el token codificado
	return token.encode(cargarToken, claveSecreta)

}