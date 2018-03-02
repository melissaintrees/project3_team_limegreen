const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static(path.join(__dirname, 'client/public')));
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});