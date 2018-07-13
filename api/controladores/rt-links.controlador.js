
"use strict"
// Importamos el modelo de links
var Links = require("../modelos/rt-links.modelo.js");
    
//Método para crear Links

function creaLinks(req, res) {
  var links = new Links();
  var parametros = req.body;
  links.ram_linksnombre = parametros.ram_linksnombre;
  links.ram_fchacreacion = parametros.ram_fchacreacion;
  links.ram_fchaactuali = parametros.ram_fchaactuali;
  links.ram_media = parametros.ram_media;
  links.ram_idusuario = parametros.ram_idusuario;
    
  if (parametros.ram_idusuario) {
      if (links.ram_linksnombre != null) {
        links.save((error, linksGuardado) => {
          if (error) {
            res.status(500).send({
              mensaje: "Error al guardar el Links"
            })
          } else {
            res.status(200).send({
              mensaje: "El Links   " + linksGuardado.ram_linksnombre       + 'Creado con Exito',
              data: linksGuardado
            })
          }
        })
      }
  }
}
    
function veLinks(req, res) {
  links.find((error, mostrandoLinkss)=>{
    
    if(error){
    
      res.status(500).send({mensaje: "Error en la petición"})
    
    }else{
    
      res.status(200).send({mostrandoLinkss});
    }
    
  }).sort("_id");
      
}
//Método para actualizar usuario
function actualizaLinks(req, res) {
    
  var id = req.params.id;
  //Tomamos los datos del formulario
  var actualizar = req.body;
  // if (id != req.usuarioToken.sub) {
  //   return res.status(500).send({
  //     mensaje: "No tienes permisos para actualizar este usuario"
  //   })
  // }
  //Recorremos la base de datos con el método findByIdAndUpdate
  Links.findByIdAndUpdate(id, actualizar, (error, linksActualizado) => {
    
    if (error) {
      res.status(500).send({
        mensaje: "Error al actualizar el Links"
      })
    } else {
      if (!linksActualizado) {
        res.status(404).send({
          mensaje: "No se ha podido actualizar el Links"
        })
      } else {
        res.status(200).send({
          linksActualizado
        })
      }
    }
  })
}
    
//Método para borrar usuario
function borraLinks(req, res) {
    
  var id = req.params.id;
    
  /*if (id != req.usuarioToken.sub) {
    
    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })
    
}*/
    
  //Recorremos la base de datos con el método findByIdAndRemove
  Links.findByIdAndRemove(id, (error, linksBorrado) => {
    
    if (error) {
    
      res.status(500).send({
        mensaje: "Error al borrar el Links"
      })
    
    } else {
    
      if (!linksBorrado) {
    
        res.status(404).send({
          mensaje: "No se ha podido borrado el Links"
        })
    
      } else {
    
        res.status(200).send({
          linksBorrado
        })
      }
    
    }
    
  })
}
    
//Exportamos los métodos del módulo
module.exports = {
  creaLinks,
  veLinks,
  actualizaLinks,
  borraLinks
}