var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todos",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error + 'Somethin went wrong');
  } else {
    console.log("Connected!:)");
  }
});
module.exports = connection;
