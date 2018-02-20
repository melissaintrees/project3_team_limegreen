let axios = require('axios');
let con = require('../config/connection.js');

// Defining methods for the booksController
module.exports = {
//   findById: function(req, res, id) {
//     axios.get('https://calltoserver/findById/' + id)
//       .then(function(response){
//         console.log(response.data); // ex.: { user: 'Your User'}
//         console.log(response.status); // ex.: 200
//         return dbModel => res.json(res.data);
//       });
    
//   },
//   findByCategory: function(req, res, category) {
//     axios.get('https://calltoserver/findByCategory/' + category)
//       .then(function(response){
//         console.log(response.data); // ex.: { user: 'Your User'}
//         console.log(response.status); // ex.: 200
//         return dbModel => res.json(res.data);
//       });
//   },

  tempQ: function(req, res) {
    let id  = req.params.id;

    let sql = `SELECT * FROM questions WHERE id="${id}"`

    console.log(sql);

    con.query(sql, function (err, result) {
        if (err) throw err;

        if(0 == 1){
            console.log(result);
            cb(result, res);
        }
        else{
            console.log(result);
            res.json(result);
        }
    });
  },
};