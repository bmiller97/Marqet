var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fuckagile",
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO books (Item Name, Price, Description, Contact) VALUES ?";
  cocon.query(sql, [values], function(err, result){
if (err) throw err;
});
});
