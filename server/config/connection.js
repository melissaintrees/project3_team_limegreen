let mysql = require('mysql');

let con;

if(process.env.JAWSDB_URL){
  con = mysql.createConnection(process.env.JAWSDB_URL);
}

else{
  con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Myfavri0te21",
    database: "futureCoders"
  })
} 
//msm password: cr8lifenow222
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;