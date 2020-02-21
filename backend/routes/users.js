const express = require("express");
const router = express.Router();
const Archive = require("../models/user");
const moment = require("moment-timezone");

moment()
    .tz("America/Santiago")
    .format();

router.post("/add", async (req, res) => {

});

router.get("/all", async (req, res) => {
    var fs = require('fs');

    var readME = fs.readFileSync('./data.txt', 'utf8');
    var jsonExist = JSON.parse(readME);



    res.json({
        status: "200",
        data: jsonExist
    })
})


module.exports = router;