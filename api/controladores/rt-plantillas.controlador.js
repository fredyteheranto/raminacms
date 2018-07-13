
  "use strict"
  // Importamos el modelo de plantillas
  var Plantillas = require("../modelos/rt-plantillas.modelo.js");
    
  //Método para crear Plantillas
    
  function creaPlantillas(req, res) {
    var plantillas = new Plantillas();
    var parametros = req.body;
    plantillas.ram_plantillasnombre = parametros.ram_plantillasnombre;
    plantillas.ram_fchacreacion = parametros.ram_fchacreacion;
    plantillas.ram_fchaactuali = parametros.ram_fchaactuali;
    plantillas.ram_plantillas = parametros.ram_plantillas;
    plantillas.ram_idusuario = parametros.ram_idusuario;
    
    if (parametros.ram_idusuario) {
        if (plantillas.ram_plantillasnombre != null) {
          plantillas.save((error, plantillasGuardado) => {
            if (error) {
              res.status(500).send({
                mensaje: "Error al guardar el Plantillas"
              })
            } else {
              res.status(200).send({
                mensaje: "El Plantillas   " + plantillasGuardado.ram_plantillasnombre       + 'Creado con Exito',
                data: plantillasGuardado
              })
            }
          })
        }
    }
  }
    
  function vePlantillas(req, res) {
    plantillas.find((error, mostrandoPlantillass)=>{
    
      if(error){
    
        res.status(500).send({mensaje: "Error en la petición"})
    
      }else{
    
        res.status(200).send({mostrandoPlantillass});
      }
    
    }).sort("_id");
      
  }
  //Método para actualizar usuario
  function actualizaPlantillas(req, res) {
    
    var id = req.params.id;
    //Tomamos los datos del formulario
    var actualizar = req.body;
    // if (id != req.usuarioToken.sub) {
    //   return res.status(500).send({
    //     mensaje: "No tienes permisos para actualizar este usuario"
    //   })
    // }
    //Recorremos la base de datos con el método findByIdAndUpdate
    Plantillas.findByIdAndUpdate(id, actualizar, (error, plantillasActualizado) => {
    
      if (error) {
        res.status(500).send({
          mensaje: "Error al actualizar el Plantillas"
        })
      } else {
        if (!plantillasActualizado) {
          res.status(404).send({
            mensaje: "No se ha podido actualizar el Plantillas"
          })
        } else {
          res.status(200).send({
            plantillasActualizado
          })
        }
      }
    })
  }
    
  //Método para borrar usuario
  function borraPlantillas(req, res) {
    
    var id = req.params.id;
    
    /*if (id != req.usuarioToken.sub) {
    
      return res.status(500).send({
        mensaje: "No tienes permisos para actualizar este usuario"
      })
    
  }*/
    
    //Recorremos la base de datos con el método findByIdAndRemove
    Plantillas.findByIdAndRemove(id, (error, plantillasBorrado) => {
    
      if (error) {
    
        res.status(500).send({
          mensaje: "Error al borrar el Plantillas"
        })
    
      } else {
    
        if (!plantillasBorrado) {
    
          res.status(404).send({
            mensaje: "No se ha podido borrado el Plantillas"
          })
    
        } else {
    
          res.status(200).send({
            plantillasBorrado
          })
        }
    
      }
    
    })
  }
    
  //Exportamos los métodos del módulo
  module.exports = {
    creaPlantillas,
    vePlantillas,
    actualizaPlantillas,
    borraPlantillas
  }