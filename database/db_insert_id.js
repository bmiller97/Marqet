var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fuckagile",
  database: "account"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO users (name, password) VALUES ('admin', 'password')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});