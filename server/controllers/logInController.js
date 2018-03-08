let con = require('../config/connection.js');
let bcrypt = require('bcrypt-nodejs');

function validateUser(userName, password, cb, res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    let sql = `SELECT password FROM users WHERE name="${userName}"`

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('password: ' + result)

        let hash = result[0].password;

        bcrypt.compare(password, hash, function(err, doesMatch){
        if (err) throw err;

        if (doesMatch){
            cb(true, res, userName);
        }
        });
    });
}

module.exports = validateUser;
