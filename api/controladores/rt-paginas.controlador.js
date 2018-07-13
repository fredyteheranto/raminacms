
"use strict"
// Importamos el modelo de paginas
var Paginas = require("../modelos/rt-paginas.modelo.js");
    
//Método para crear Paginas

function creaPaginas(req, res) {
  var paginas = new Paginas();
  var parametros = req.body;
  paginas.ram_paginasnombre = parametros.ram_paginasnombre;
  paginas.ram_fchacreacion = parametros.ram_fchacreacion;
  paginas.ram_fchaactuali = parametros.ram_fchaactuali;
  paginas.ram_media = parametros.ram_media;
  paginas.ram_idusuario = parametros.ram_idusuario;
    
  if (parametros.ram_idusuario) {
      if (paginas.ram_paginasnombre != null) {
        paginas.save((error, paginasGuardado) => {
          if (error) {
            res.status(500).send({
              mensaje: "Error al guardar el Paginas"
            })
          } else {
            res.status(200).send({
              mensaje: "El Paginas   " + paginasGuardado.ram_paginasnombre       + 'Creado con Exito',
              data: paginasGuardado
            })
          }
        })
      }
  }
}
    
function vePaginas(req, res) {
  paginas.find((error, mostrandoPaginass)=>{
    
    if(error){
    
      res.status(500).send({mensaje: "Error en la petición"})
    
    }else{
    
      res.status(200).send({mostrandoPaginass});
    }
    
  }).sort("_id");
      
}
//Método para actualizar usuario
function actualizaPaginas(req, res) {
    
  var id = req.params.id;
  //Tomamos los datos del formulario
  var actualizar = req.body;
  // if (id != req.usuarioToken.sub) {
  //   return res.status(500).send({
  //     mensaje: "No tienes permisos para actualizar este usuario"
  //   })
  // }
  //Recorremos la base de datos con el método findByIdAndUpdate
  Paginas.findByIdAndUpdate(id, actualizar, (error, paginasActualizado) => {
    
    if (error) {
      res.status(500).send({
        mensaje: "Error al actualizar el Paginas"
      })
    } else {
      if (!paginasActualizado) {
        res.status(404).send({
          mensaje: "No se ha podido actualizar el Paginas"
        })
      } else {
        res.status(200).send({
          paginasActualizado
        })
      }
    }
  })
}
    
//Método para borrar usuario
function borraPaginas(req, res) {
    
  var id = req.params.id;
    
  /*if (id != req.usuarioToken.sub) {
    
    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })
    
}*/
    
  //Recorremos la base de datos con el método findByIdAndRemove
  Paginas.findByIdAndRemove(id, (error, paginasBorrado) => {
    
    if (error) {
    
      res.status(500).send({
        mensaje: "Error al borrar el Paginas"
      })
    
    } else {
    
      if (!paginasBorrado) {
    
        res.status(404).send({
          mensaje: "No se ha podido borrado el Paginas"
        })
    
      } else {
    
        res.status(200).send({
          paginasBorrado
        })
      }
    
    }
    
  })
}
    
//Exportamos los métodos del módulo
module.exports = {
  creaPaginas,
  vePaginas,
  actualizaPaginas,
  borraPaginas
}