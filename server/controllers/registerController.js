
let con = require('../config/connection.js');
let bcrypt = require('bcrypt-nodejs');

function addUser(userName, password, email, cb, res){

    var salt = bcrypt.genSaltSync(10);
    
    bcrypt.hash(password, salt, null,  function(err, bcryptedPassword) {
        if (err) throw err;
        let newPassword = bcryptedPassword;

        let sql = `INSERT INTO users (name, password) VALUES ("${userName}", "${newPassword}");`
        console.log(sql);

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    });
}

module.exports = addUser;
