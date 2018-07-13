   
  "use strict"
  // Importamos el modelo de media
  var Media = require("../modelos/rt-media.modelo.js");
  
  //Método para crear Media
  
  function creaMedia(req, res) {
    var media = new Media();
    var parametros = req.body;
    media.ram_medianombre = parametros.ram_medianombre;
    media.ram_mediafile = parametros.ram_mediafile;
    media.ram_fchacreacion = parametros.ram_fchacreacion;
    media.ram_fchaactuali = parametros.ram_fchaactuali;
    media.ram_idusuario = parametros.ram_idusuario;
  
    if (parametros.ram_idusuario) {
        if (media.ram_medianombre != null) {
          media.save((error, mediaGuardado) => {
            if (error) {
              res.status(500).send({
                mensaje: "Error al guardar el Media"
              })
            } else {
              res.status(200).send({
                mensaje: "El Media   " + mediaGuardado.ram_medianombre       + 'Creado con Exito',
                data: mediaGuardado
              })
            }
          })
        }
    }
  }
  
  function veMedia(req, res) {
    media.find((error, mostrandoMedias)=>{
  
      if(error){
  
        res.status(500).send({mensaje: "Error en la petición"})
  
      }else{
  
        res.status(200).send({mostrandoMedias});
      }
  
    }).sort("_id");
    
  }
  //Método para actualizar usuario
  function actualizaMedia(req, res) {
  
    var id = req.params.id;
    //Tomamos los datos del formulario
    var actualizar = req.body;
    // if (id != req.usuarioToken.sub) {
    //   return res.status(500).send({
    //     mensaje: "No tienes permisos para actualizar este usuario"
    //   })
    // }
    //Recorremos la base de datos con el método findByIdAndUpdate
    Media.findByIdAndUpdate(id, actualizar, (error, mediaActualizado) => {
  
      if (error) {
        res.status(500).send({
          mensaje: "Error al actualizar el Media"
        })
      } else {
        if (!mediaActualizado) {
          res.status(404).send({
            mensaje: "No se ha podido actualizar el Media"
          })
        } else {
          res.status(200).send({
            mediaActualizado
          })
        }
      }
    })
  }
  
  //Método para borrar usuario
  function borraMedia(req, res) {
  
    var id = req.params.id;
  
    /*if (id != req.usuarioToken.sub) {
  
      return res.status(500).send({
        mensaje: "No tienes permisos para actualizar este usuario"
      })
  
  }*/
  
    //Recorremos la base de datos con el método findByIdAndRemove
    Media.findByIdAndRemove(id, (error, mediaBorrado) => {
  
      if (error) {
  
        res.status(500).send({
          mensaje: "Error al borrar el Media"
        })
  
      } else {
  
        if (!mediaBorrado) {
  
          res.status(404).send({
            mensaje: "No se ha podido borrado el Media"
          })
  
        } else {
  
          res.status(200).send({
            mediaBorrado
          })
        }
  
      }
  
    })
  }
  
  //Exportamos los métodos del módulo
  module.exports = {
    creaMedia,
    veMedia,
    actualizaMedia,
    borraMedia
  }