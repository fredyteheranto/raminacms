"use strict"
// Importamos el modelo de opciones
var Opciones = require("../modelos/rt-opciones.modelo.js");

//Método para crear Menu

function creaOpciones(req, res) {
  var opciones = new Opciones();
  var parametros = req.body;
  opciones.ram_opcionesnombre = parametros.ram_opcionesnombre;
  opciones.ram_fchacreacion = parametros.ram_fchacreacion;
  opciones.ram_fchaactuali = parametros.ram_fchaactuali;
  opciones.ram_idopciones = parametros.ram_idopciones;

  if (parametros.ram_idopciones) {
      if (opciones.ram_opcionesnombre != null) {
        opciones.save((error, opcionesGuardado) => {
          if (error) {
            res.status(500).send({
              mensaje: "Error al guardar el Menu"
            })
          } else {
            res.status(200).send({
              mensaje: "El Menu   " + opcionesGuardado.ram_opcionesnombre       + 'Creado con Exito',
              data: opcionesGuardado
            })
          }
        })
      }
  }
}

function veOpciones(req, res) {
  opciones.find((error, mostrandoMenus)=>{

    if(error){

      res.status(500).send({mensaje: "Error en la petición"})

    }else{

      res.status(200).send({mostrandoMenus});
    }

  }).sort("_id");
  
}
//Método para actualizar usuario
function actualizaOpciones(req, res) {

  var id = req.params.id;
  //Tomamos los datos del formulario
  var actualizar = req.body;
  // if (id != req.usuarioToken.sub) {
  //   return res.status(500).send({
  //     mensaje: "No tienes permisos para actualizar este usuario"
  //   })
  // }
  //Recorremos la base de datos con el método findByIdAndUpdate
  Menu.findByIdAndUpdate(id, actualizar, (error, opcionesActualizado) => {

    if (error) {
      res.status(500).send({
        mensaje: "Error al actualizar el MEnu"
      })
    } else {
      if (!opcionesActualizado) {
        res.status(404).send({
          mensaje: "No se ha podido actualizar el MEnu"
        })
      } else {
        res.status(200).send({
          opcionesActualizado
        })
      }
    }
  })
}

//Método para borrar usuario
function borraOpciones(req, res) {

  var id = req.params.id;

  /*if (id != req.usuarioToken.sub) {

    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })

}*/

  //Recorremos la base de datos con el método findByIdAndRemove
  Menu.findByIdAndRemove(id, (error, opcionesBorrado) => {

    if (error) {

      res.status(500).send({
        mensaje: "Error al borrar el Menu"
      })

    } else {

      if (!opcionesBorrado) {

        res.status(404).send({
          mensaje: "No se ha podido borrado el Menu"
        })

      } else {

        res.status(200).send({
          opcionesBorrado
        })
      }

    }

  })
}

//Exportamos los métodos del módulo
module.exports = {
  creaOpciones,
  veOpciones,
  actualizaOpciones,
  borraOpciones
}