const mongoose = require("mongoose");
const moment = require("moment-timezone");
let timeVal = moment()
  .tz("America/Santiago")
  .format();

const { Schema } = mongoose;

const Users = new Schema({
    usuario: {
        Nombre: {
          type: String
        },
        Apellido: {
          type: String
        },
        Dni: {
          type: String
        },
        Fecha_creacion: {
          type: String
        },
        Estado: {
          type: Number
        },
        Rol: {
          type: Number
        },
        email: {
          type: String
        },
        contraseña: {
          type: String
        }
      }
  });
  
//   users.statics.findbyname = function(name, cb) {
//     return this.find({ "archivo.name": new RegExp(name, "i") }, cb);
//   };
  
  module.exports = mongoose.model("Users", Users);