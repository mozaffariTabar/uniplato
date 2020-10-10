const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});

db.connect();

const readBook = (id) => {
  return `SELECT 
        books.id, 
        books.title,
        books.subtitle,
        authors.name as author, 
        books.published, 
        publishers.name as publisher,
        books.pages,
        books.description,
        books.website
    FROM books 
    INNER JOIN authors ON 
        books.author = authors.id 
    INNER JOIN publishers ON 
        books.publisher = publishers.id 
    WHERE ${id ? "books.id=" + id : 1}`;
};

const createBook = (info) => {};

const deleteBook = (id) => {};

const updateBook = (info) => {};

module.exports = {
  db,
  book: {
    read: readBook,
    create: createBook,
    delete: deleteBook,
    update: updateBook,
  },
};
