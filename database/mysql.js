const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});

db.connect();

// Admin queries
const readAdmin = (info) => {
  return `SELECT * FROM admins
    WHERE email='${info.email}' AND password='${info.password}'`;
};

const createAdmin = (info) => {
  return `INSERT INTO admins
      (email, password)
    VALUES
      ('${info.email}','${info.password}')`;
};

const deleteAdmin = (info) => {
  return `DELETE FROM admins WHERE email='${info.email}' AND passord='${info.password}'`;
};

// Book queries
const readBook = (isbn) => {
  return `SELECT 
      books.isbn, 
      books.title,
      books.subtitle,
      books.categories,
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
    WHERE ${isbn ? "isbn=" + isbn : "1"}`;
};

const createBook = (info) => {
  return `INSERT INTO books
      (${Object.keys(info).join(",")})
    VALUES
      ('${Object.values(info)
        .map((item) => ("" + item).replace(/'/g, "\\'"))
        .join("','")}')`;
};

const updateBook = (info) => {
  let values = [];

  for (let i in info) 
    values.push(`${i}=${("" + info[i]).replace(/'/g, "\\'")}`);

  return `UPDATE books SET ${values.join(",")} WHERE isbn=${info.isbn}`;
};

const deleteBook = (isbn) => {
  return `DELETE FROM books WHERE isbn=${isbn}`;
};

// Category queries
const readCategory = (filter) => {
  const key = Object.keys(filter)[0];
  return `SELECT * FROM categories WHERE ${filter[key] ? `${key}=${filter[key]}` : "1"}`;
};

const createCategory = (name) => {
  return `INSERT INTO categories (name) VALUES (${name})`;
};

const updateCategory = (info) => {
  return `UPDATE books SET name=${info.name} WHERE isbn=${info.id}`;
};

module.exports = {
  db,
  query: {
    readAdmin,
    createAdmin,
    deleteAdmin,
    readBook,
    createBook,
    updateBook,
    deleteBook,
    readCategory,
    createCategory,
    updateCategory
  }
};
