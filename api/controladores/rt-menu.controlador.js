"use strict"
// Importamos el modelo de menu
var Menu = require("../modelos/rt-menu.modelo.js");

//Método para crear Menu
function crearMenu(req, res) {
  var menu = new Menu();
  var parametros = req.body;
  menu.ram_menunombre = parametros.ram_menunombre;
  menu.ram_fchacreacion = parametros.ram_fchacreacion;
  menu.ram_fchaactuali = parametros.ram_fchaactuali;
  menu.ram_iduser = parametros.ram_iduser;

  if (parametros.ram_iduser) {
      if (menu.ram_menunombre != null) {
        menu.save((error, menuGuardado) => {
          if (error) {
            res.status(500).send({
              mensaje: "Error al guardar el Menu"
            })
          } else {
            res.status(200).send({
              mensaje: "El Menu   " + menuGuardado.ram_menunombre       + 'Creado con Exito',
              data: menuGuardado
            })
          }
        })
      }
  }
}

function verMenu(req, res) {
  menu.find((error, mostrandoMenus)=>{

    if(error){

      res.status(500).send({mensaje: "Error en la petición"})

    }else{

      res.status(200).send({mostrandoMenus});
    }

  }).sort("_id");
  
}
//Método para actualizar usuario
function actualizarMenu(req, res) {

  var id = req.params.id;
  //Tomamos los datos del formulario
  var actualizar = req.body;
  // if (id != req.usuarioToken.sub) {
  //   return res.status(500).send({
  //     mensaje: "No tienes permisos para actualizar este usuario"
  //   })
  // }
  //Recorremos la base de datos con el método findByIdAndUpdate
  Menu.findByIdAndUpdate(id, actualizar, (error, menuActualizado) => {

    if (error) {
      res.status(500).send({
        mensaje: "Error al actualizar el MEnu"
      })
    } else {
      if (!menuActualizado) {
        res.status(404).send({
          mensaje: "No se ha podido actualizar el MEnu"
        })
      } else {
        res.status(200).send({
          menuActualizado
        })
      }
    }
  })
}

//Método para borrar usuario
function borrarMenu(req, res) {

  var id = req.params.id;

  /*if (id != req.usuarioToken.sub) {

    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })

}*/

  //Recorremos la base de datos con el método findByIdAndRemove
  Menu.findByIdAndRemove(id, (error, menuBorrado) => {

    if (error) {

      res.status(500).send({
        mensaje: "Error al borrar el Menu"
      })

    } else {

      if (!menuBorrado) {

        res.status(404).send({
          mensaje: "No se ha podido borrado el Menu"
        })

      } else {

        res.status(200).send({
          menuBorrado
        })
      }

    }

  })
}

//Exportamos los métodos del módulo
module.exports = {
  crearMenu,
  verMenu,
  actualizarMenu,
  borrarMenu
}