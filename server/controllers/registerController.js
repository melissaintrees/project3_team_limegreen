
let con = require('../config/connection.js');
let bcrypt = require('bcrypt-nodejs');

function addUser(userName, password, email, cb, res){
    console.log(userName);
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    bcrypt.hash(password, 5, function( err, bcryptedPassword) {
        let newPassword = bcryptedPassword;
        console.log(newPassword);

        let sql = `INSERT INTO users (user_name, password, email) VALUES ("${userName}", "${newPassword}", "${email}");`

        con.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
}

module.exports = addUser;
