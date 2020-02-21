const mongoose = require("mongoose");
const URI = "mongodb://jeancbarreto:J123456@ds255107.mlab.com:55107/leans"

mongoose
  .connect(URI)
  .then(db => console.log("Db is connected"))
  .catch(error => console.error(error));

module.exports = mongoose;