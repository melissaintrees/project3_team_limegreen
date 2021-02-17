const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const express = require("express");
let con = require('../config/connection.js');

// router.use("/", express.static(path.join(__dirname, 'client/build')));

// API Routes
router.use("/api", apiRoutes);

//Register and Sign-In Routes
router.use("/users", userRoutes)

//Scoring
router.post("/score", function(req, res) {
    let sql = `INSERT INTO users (score) VALUES ("${req.body.score}") WHERE name=${req.body.username};`
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
    });
  });

// If no API routes are hit, send the React app
// router.use("*", function(req, res) {
//     console.log("the directory name: ", __dirname)
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
