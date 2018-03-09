let axios = require('axios');
let con = require('../config/connection.js');

// Defining methods for the booksController
module.exports = {
  categoryQ: function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    

    let sql = `SELECT * FROM questions WHERE category="${req.params.category}"`

    con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
  },
};