
"use strict"
// Importamos el modelo de modulos
var Modulos = require("../modelos/rt-modulos.modelo.js");
    
//Método para crear Modulos

function creaModulos(req, res) {
  var modulos = new Modulos();
  var parametros = req.body;
  modulos.ram_modulosnombre = parametros.ram_modulosnombre;
  modulos.ram_fchacreacion = parametros.ram_fchacreacion;
  modulos.ram_fchaactuali = parametros.ram_fchaactuali;
  modulos.ram_moduloUb = parametros.ram_moduloUb;
  modulos.ram_media = parametros.ram_media;
  modulos.ram_idusuario = parametros.ram_idusuario;
    
  if (parametros.ram_idusuario) {
      if (modulos.ram_modulosnombre != null) {
        modulos.save((error, modulosGuardado) => {
          if (error) {
            res.status(500).send({
              mensaje: "Error al guardar el Modulos"
            })
          } else {
            res.status(200).send({
              mensaje: "El Modulos   " + modulosGuardado.ram_modulosnombre       + 'Creado con Exito',
              data: modulosGuardado
            })
          }
        })
      }
  }
}
    
function veModulos(req, res) {
  modulos.find((error, mostrandoModuloss)=>{
    
    if(error){
    
      res.status(500).send({mensaje: "Error en la petición"})
    
    }else{
    
      res.status(200).send({mostrandoModuloss});
    }
    
  }).sort("_id");
      
}
//Método para actualizar usuario
function actualizaModulos(req, res) {
    
  var id = req.params.id;
  //Tomamos los datos del formulario
  var actualizar = req.body;
  // if (id != req.usuarioToken.sub) {
  //   return res.status(500).send({
  //     mensaje: "No tienes permisos para actualizar este usuario"
  //   })
  // }
  //Recorremos la base de datos con el método findByIdAndUpdate
  Modulos.findByIdAndUpdate(id, actualizar, (error, modulosActualizado) => {
    
    if (error) {
      res.status(500).send({
        mensaje: "Error al actualizar el Modulos"
      })
    } else {
      if (!modulosActualizado) {
        res.status(404).send({
          mensaje: "No se ha podido actualizar el Modulos"
        })
      } else {
        res.status(200).send({
          modulosActualizado
        })
      }
    }
  })
}
    
//Método para borrar usuario
function borraModulos(req, res) {
    
  var id = req.params.id;
    
  /*if (id != req.usuarioToken.sub) {
    
    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })
    
}*/
    
  //Recorremos la base de datos con el método findByIdAndRemove
  Modulos.findByIdAndRemove(id, (error, modulosBorrado) => {
    
    if (error) {
    
      res.status(500).send({
        mensaje: "Error al borrar el Modulos"
      })
    
    } else {
    
      if (!modulosBorrado) {
    
        res.status(404).send({
          mensaje: "No se ha podido borrado el Modulos"
        })
    
      } else {
    
        res.status(200).send({
          modulosBorrado
        })
      }
    
    }
    
  })
}
    
//Exportamos los métodos del módulo
module.exports = {
  creaModulos,
  veModulos,
  actualizaModulos,
  borraModulos
}