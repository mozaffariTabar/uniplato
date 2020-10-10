require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("./database/mysql");

app.get("/api/book/read/:id?", (req, res) => {
  mysql.db.query(mysql.book.read(req.params.id), (err, results) => {
    if (err) throw err;
    results.length === 0
      ? res.json({ Message: "No books found" })
      : res.json(results);
  });
});

app.post("/api/book/create/:id?", (req, res) => {
  mysql.db.query(mysql.book.create(req.params.id), (err, results) => {
    if (err) throw err;
    results.length === 0
      ? res.json({ Message: "No books found" })
      : res.json(results);
  });
});

app.put("/api/book/update/:id?", (req, res) => {
  mysql.db.query(mysql.book.update(req.params.id), (err, results) => {
    if (err) throw err;
    results.length === 0
      ? res.json({ Message: "No books found" })
      : res.json(results);
  });
});

app.delete("/api/book/delete/:id?", (req, res) => {
  mysqldb.query(mysql.book.delete(req.params.id), (err, results) => {
    if (err) throw err;
    results.length === 0
      ? res.json({ Message: "No books found" })
      : res.json(results);
  });
});

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(
    `Server started on port ${
      process.env.SERVER_PORT ? process.env.SERVER_PORT : 3000
    }`
  );
});
