const mongoose = require("mongoose");
const moment = require("moment-timezone");
let timeVal = moment()
  .tz("America/Santiago")
  .format();

const { Schema } = mongoose;

const Products = new Schema({
    Producto: {
        Nombre: {
          type: String
        },
        Descripcion: {
          type: String
        },
        foto: {
          type: String
        },
        Fecha_creacion: {
          type: String
        },
        Estado: {
          type: Number
        },
        Monto:{
            type: String
        },
        cantidad: {
          type: Number
        }
      }
  });
  
//   users.statics.findbyname = function(name, cb) {
//     return this.find({ "archivo.name": new RegExp(name, "i") }, cb);
//   };
  
  module.exports = mongoose.model("products", Products);