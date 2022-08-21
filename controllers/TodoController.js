
var bodyParser = require("body-parser");
const connection = require("../db");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

  app.get("/", function (req, res) {
    connection.query(
      "SELECT * FROM todos ORDER BY id desc",
      function (err, rows) {
        if (err) throw err;

        res.render("index", {
          title: "List of Todo items - Todos",
          todos: rows,
        });
      }
    );
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    console.log(req.body.todo);
    connection.query(
      `INSERT INTO todos (name) VALUES ('${req.body.todo}')`,
      function (err, data) {
        if (err) throw err;
        res.redirect("/");
      }
    );
  });

  app.delete("/todo/:item", function (req, res) {
    connection.query(
      `DELETE FROM todos WHERE id = ${req.params.item}`,
      function (err, data) {
        if (err) throw err
        res.json(data)
      }
    );
  });
};
