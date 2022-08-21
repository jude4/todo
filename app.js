var express = require("express");
var TodoController = require("./controllers/TodoController");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));


TodoController(app);

app.listen(3000);

console.log("You are listening to port 3000");
