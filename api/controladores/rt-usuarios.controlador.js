"use strict"
// Importamos el modelo de usuarios
var Usuarios = require("../modelos/rt-usuarios.modelo.js");
var bcrypt = require("bcrypt-nodejs");
var token = require("../token/token.js");

//Método para crear Usuarios
function crearUsuarios(req, res) {
  var usuarios = new Usuarios();
  var parametros = req.body;
  usuarios.ram_usuario = parametros.ram_usuario;
  usuarios.ram_password = parametros.ram_password;
  usuarios.ram_email = parametros.ram_email;
  usuarios.ram_nombres = parametros.ram_nombres;
  usuarios.ram_fchcreacion = parametros.ram_fchcreacion;
  usuarios.ram_fchactualiz = parametros.ram_fchactualiz;
  usuarios.ram_login = parametros.ram_login;
  usuarios.ram_estado = parametros.ram_estado;

  if (parametros.ram_password) {

    bcrypt.hash(parametros.ram_password, null, null, function (error, hash) {
      usuarios.password = hash;
      if (usuarios.ram_usuario != null) {
        usuarios.save((error, usuarioGuardado) => {
          if (error) {
            res.status(500).send({
              mensaje: "Error al guardar el usuario"
            })
          } else {
            res.status(200).send({
              mensaje: "El Usuario   " + usuarioGuardado.ram_usuario + 'Creado con Exito',
              data: usuarioGuardado
            })
          }
        })
      }
    })
  }
}

//Método para ingreso de usuarios
function ingresoUsuario(req, res) {

  var parametros = req.body;
  var usuario = parametros.ram_usuario;
  var ram_password = parametros.ram_password;
  console.log(parametros)
  Usuarios.findOne({
    ram_usuario: usuario
  }, (error, seleccionUsuario) => {
    console.log(token)
    if (error) {
      res.status(500).send({
        mensaje: "Error al ingresar el usuario" + error
      })
    } else {
      if (!seleccionUsuario) {

        res.status(404).send({
          mensaje: "El usuario no existe"
        })

      } else {
        if (seleccionUsuario.ram_password == ram_password) {
          res.status(200).send({
            token: token.crearToken(seleccionUsuario),
            seleccionUsuario
          })

        } else {
          res.status(403).send({
            mensaje: "La contraseña Es incorrecta"
          })
        }

      }
    }
  })
}

//Método para actualizar usuario
function actualizarUsuario(req, res) {

  var id = req.params.id;
  //Tomamos los datos del formulario
  var actualizar = req.body;
  if (id != req.usuarioToken.sub) {
    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })
  }
  //Recorremos la base de datos con el método findByIdAndUpdate
  Usuarios.findByIdAndUpdate(id, actualizar, (error, usuarioActualizado) => {

    if (error) {
      res.status(500).send({
        mensaje: "Error al actualizar el usuario"
      })
    } else {
      if (!usuarioActualizado) {
        res.status(404).send({
          mensaje: "No se ha podido actualizar el usuario"
        })
      } else {
        res.status(200).send({
          usuarioActualizado
        })
      }
    }
  })
}

//Método para borrar usuario
function borrarUsuario(req, res) {

  var id = req.params.id;

  if (id != req.usuarioToken.sub) {

    return res.status(500).send({
      mensaje: "No tienes permisos para actualizar este usuario"
    })

  }

  //Recorremos la base de datos con el método findByIdAndRemove
  Usuarios.findByIdAndRemove(id, (error, usuarioBorrado) => {

    if (error) {

      res.status(500).send({
        mensaje: "Error al borrar el usuario"
      })

    } else {

      if (!usuarioBorrado) {

        res.status(404).send({
          mensaje: "No se ha podido borrado el usuario"
        })

      } else {

        res.status(200).send({
          usuarioBorrado
        })
      }

    }

  })
}

//Exportamos los métodos del módulo
module.exports = {
  crearUsuarios,
  ingresoUsuario,
  actualizarUsuario,
  borrarUsuario
}