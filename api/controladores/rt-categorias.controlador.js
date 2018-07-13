   
"use strict"
// Importamos el modelo de categoria
var Categoria = require("../modelos/rt-categorias.modelo.js");
  
//Método para crear Categoria
  
function creaCategoria(req, res) {
  var categoria = new Categoria();
  var parametros = req.body;
  categoria.ram_categorianombre = parametros.ram_categorianombre;
  categoria.ram_fchacreacion = parametros.ram_fchacreacion;
  categoria.ram_fchaactuali = parametros.ram_fchaactuali;
  categoria.ram_idusuario = parametros.ram_idusuario;
  
  if (parametros.ram_idusuario) {
      if (categoria.ram_categorianombre != null) {
        categoria.save((error, categoriaGuardado) => {
          if (error) {
            res.status(500).send({
              mensaje: "Error al guardar el Categoria"
            })
          } else {
            res.status(200).send({
              mensaje: "El Categoria   " + categoriaGuardado.ram_categorianombre       + 'Creado con Exito',
              data: categoriaGuardado
            })
          }
        })
      }
  }
}
  
function veCategoria(req, res) {
  categoria.find((error, mostrandoCategorias)=>{
  
    if(error){
  
      res.status(500).send({mensaje: "Error en la petición"})
  
    }else{
  
      res.status(200).send({mostrandoCategorias});
    }
  
  }).sort("_id");
    
}
//Método para actualizar usuario
function actualizaCategoria(req, res) {
  
  var id = req.params.id;
  //Tomamos los datos del formulario
  var actualizar = req.body;
  // if (id != req.usuarioToken.sub) {
  //   return res.status(500).send({
  //     mensaje: "No tienes permisos para actualizar este usuario"
  //   })
  // }
  //Recorremos la base de datos con el método findByIdAndUpdate
  Categoria.findByIdAndUpdate(id, actualizar, (error, categoriaActualizado) => {
  
    if (error) {
      res.status(500).send({
        mensaje: "Error al actualizar el Categoria"
      })
    } else {
      if (!categoriaActualizado) {
        res.status(404).send({
          mensaje: "No se ha podido actualizar el Categoria"
        })
      } else {
        res.status(200).send({
          categoriaActualizado
        })
      }
    }
  })
}
  
//Método para borrar usuario
function borraCategoria(req, res) {
  
  var id = req.params.id;
  
  /*if (id != req.usuarioToken.sub) {
  
    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })
  
}*/
  
  //Recorremos la base de datos con el método findByIdAndRemove
  Categoria.findByIdAndRemove(id, (error, categoriaBorrado) => {
  
    if (error) {
  
      res.status(500).send({
        mensaje: "Error al borrar el Categoria"
      })
  
    } else {
  
      if (!categoriaBorrado) {
  
        res.status(404).send({
          mensaje: "No se ha podido borrado el Categoria"
        })
  
      } else {
  
        res.status(200).send({
          categoriaBorrado
        })
      }
  
    }
  
  })
}
  
//Exportamos los métodos del módulo
module.exports = {
  creaCategoria,
  veCategoria,
  actualizaCategoria,
  borraCategoria
}