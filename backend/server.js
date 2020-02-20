const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

global.__root = __dirname + "/";

const app = express();
app.use(cors());

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
  
  // Settings
  app.set("port", process.env.PORT || 3000);
  
  // set the view engine to ejs
  app.set("view engine", "vue");
  
  // make express look in the public directory for assets (css/js/img)
  app.use(express.static(__dirname + "/public"));
  
  // set the home page route
  app.get("/", function(req, res) {
    // ejs render automatically looks in the views folder
    res.render("index");
  });

  app.get("/api", function(req, res) {
    res.json({
      message: "Welcome to API"
    });
  });

app.listen(app.get("port"), () => {
    console.log("Server on port ", app.get("port"));
  });