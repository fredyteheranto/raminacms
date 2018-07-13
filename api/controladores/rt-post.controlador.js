  "use strict"
  // Importamos el modelo de post
  var Post = require("../modelos/rt-post.modelo.js");
    
  //Método para crear Post
    
  function creaPost(req, res) {
    var post = new Post();
    var parametros = req.body;
    post.ram_postnombre = parametros.ram_postnombre;
    post.ram_postcontent = parametros.ram_postcontent;
    post.ram_posestado = parametros.ram_posestado;
    post.ram_postitulo = parametros.ram_postitulo;
    post.ram_fchacreacion = parametros.ram_fchacreacion;
    post.ram_fchaactuali = parametros.ram_fchaactuali;
    post.ram_idusuario = parametros.ram_idusuario;
    
    if (parametros.ram_idusuario) {
        if (post.ram_postnombre != null) {
          post.save((error, postGuardado) => {
            if (error) {
              res.status(500).send({
                mensaje: "Error al guardar el Post"
              })
            } else {
              res.status(200).send({
                mensaje: "El Post   " + postGuardado.ram_postnombre       + 'Creado con Exito',
                data: postGuardado
              })
            }
          })
        }
    }
  }
    
  function vePost(req, res) {
    post.find((error, mostrandoPosts)=>{
    
      if(error){
    
        res.status(500).send({mensaje: "Error en la petición"})
    
      }else{
    
        res.status(200).send({mostrandoPosts});
      }
    
    }).sort("_id");
      
  }
  //Método para actualizar usuario
  function actualizaPost(req, res) {
    
    var id = req.params.id;
    //Tomamos los datos del formulario
    var actualizar = req.body;
    // if (id != req.usuarioToken.sub) {
    //   return res.status(500).send({
    //     mensaje: "No tienes permisos para actualizar este usuario"
    //   })
    // }
    //Recorremos la base de datos con el método findByIdAndUpdate
    Post.findByIdAndUpdate(id, actualizar, (error, postActualizado) => {
    
      if (error) {
        res.status(500).send({
          mensaje: "Error al actualizar el Post"
        })
      } else {
        if (!postActualizado) {
          res.status(404).send({
            mensaje: "No se ha podido actualizar el Post"
          })
        } else {
          res.status(200).send({
            postActualizado
          })
        }
      }
    })
  }
    
  //Método para borrar usuario
  function borraPost(req, res) {
    
    var id = req.params.id;
    
    /*if (id != req.usuarioToken.sub) {
    
      return res.status(500).send({
        mensaje: "No tienes permisos para actualizar este usuario"
      })
    
  }*/
    
    //Recorremos la base de datos con el método findByIdAndRemove
    Post.findByIdAndRemove(id, (error, postBorrado) => {
    
      if (error) {
    
        res.status(500).send({
          mensaje: "Error al borrar el Post"
        })
    
      } else {
    
        if (!postBorrado) {
    
          res.status(404).send({
            mensaje: "No se ha podido borrado el Post"
          })
    
        } else {
    
          res.status(200).send({
            postBorrado
          })
        }
    
      }
    
    })
  }
    
  //Exportamos los métodos del módulo
  module.exports = {
    creaPost,
    vePost,
    actualizaPost,
    borraPost
  }