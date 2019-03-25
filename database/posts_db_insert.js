var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fuckagile",
  database: "user_post"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO post (title, body) VALUES ('Marquette 3/22 Ticket', 'Price: $5 \nThis is a test article for displaying items on the feed\nTitle: 1 ticket to this saturdays game\nLocation: Fiserv Forum\nContact Info: email: willyouman@marquette.edu ')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});