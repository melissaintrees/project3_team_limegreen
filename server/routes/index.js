const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const express = require("express");

// router.use("/", express.static(path.join(__dirname, 'client/build')));

// API Routes
router.use("/api", apiRoutes);

//Register and Sign-In Routes
router.use("/users", userRoutes)

// If no API routes are hit, send the React app
// router.use("*", function(req, res) {
//     console.log("the directory name: ", __dirname)
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;
