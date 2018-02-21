
// let con = require('../config/connection.js');
// let bcrypt = require('bcrypt');

// function addUser(userName, password, cb, res){
//     console.log(userName);
//     bcrypt.hash(password, 5, function( err, bcryptedPassword) {
//         let newPassword = bcryptedPassword;
//         console.log(newPassword);

//         let sql = `INSERT INTO users (user_name, password, email) VALUES ("${userName}", "${newPassword}", "testing");`

//         con.query(sql, function (err, result) {
//             if (err) throw err;
//         });
//     });
// }

// module.exports = addUser;
