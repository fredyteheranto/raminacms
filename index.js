"use strict"
const mongoose = require("mongoose");
/*=============================================
MODULO DE EXPRESS
=============================================*/
const app = require("./app");
var port = process.env.PORT || 1234;

/*=============================================
CONEXIÓN A BASE DE DATOS
=============================================*/
mongoose.connect("mongodb://localhost:27017/raminadb", {
  useNewUrlParser: true
}, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("La conexión a la base de datos está correcta");
    app.listen(port, () => console.log(`Servidor en  http://localhost:${port}`));
  }

})
