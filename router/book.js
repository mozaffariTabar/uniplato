const express = require('express');
const router = express.Router();
const { db, query } = require("../model/mysql");
const { authenticateToken } = require('./auth');

// Return book with special isbn
router.get("/isbn/:isbn?", authenticateToken, (req, res) => {
    db.query(query.readBook({ isbn: req.params.isbn }), (err, books) => {
        if (err) throw err;
        
        if (books.length == 0) {
            return res.status(400).json({ Message: "No books found" });
        }

        db.query(query.readCategory({}), (err, categories) => {
            if (err) throw err;
            res.status(200).json(category_int_to_str(books, categories));
        });
    });
});

// Return an special book with its title
router.get("/title/:title?", authenticateToken, (req, res) => {
    db.query(query.readBook({ title: req.params.title }), (err, books) => {
        if (err) throw err;
        
        if (books.length == 0) {
            return res.status(400).json({ Message: "No books found" });
        }

        db.query(query.readCategory({}), (err, categories) => {
            if (err) throw err;
            res.status(200).json(category_int_to_str(books, categories));
        });
    });
});

// Return all books with a category number
router.get("/category/:number?", authenticateToken, (req, res) => {
    db.query(query.readBook({ categories: req.params.number }), (err, books) => {
        if (err) throw err;
        
        if (books.length == 0) {
            return res.status(400).json({ Message: "No books found" });
        }

        db.query(query.readCategory({}), (err, categories) => {
            if (err) throw err;
            res.status(200).json(category_int_to_str(books, categories));
        });
    });
});

// Return limited range of books
router.get("/limit/:number", authenticateToken, (req, res) => {
    db.query(query.readBook(null, req.params.number), (err, books) => {
        if (err) throw err;
        
        if (books.length == 0) {
            return res.status(400).json({ Message: "No books found" });
        }

        db.query(query.readCategory({}), (err, categories) => {
            if (err) throw err;
            res.status(200).json(category_int_to_str(books, categories));
        });
    });
});

// Create new book
router.post("/", authenticateToken, (req, res) => {
    db.query(query.readBook(req.body.isbn), (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
            return res.status(409).json({ Message: "This book is already exists!" })
        }

        db.query(query.createBook(req.body), (err) => {
            if (err) throw err;
            res.status(201).json({ Message: "New book added successfully" })
        });
    });
});

// Update a book with its uniqe ISBN
router.put("/", authenticateToken, (req, res) => {
    db.query(query.updateBook(req.body), (err) => {
        if (err) throw err;
        res.status(200).json({ Message: "Book updated" })
    });
});

// delete a book with its uniqe ISBN
router.delete("/", authenticateToken, (req, res) => {
    db.query(query.deleteBook(req.body.isbn), (err) => {
        if (err) throw err;
        res.status(200).json({ Message: "The book deleted successfully" })
    });
});

// Convert category id to category name
const category_int_to_str = (books, categories) => {
    let cats = {};
    for (let i in categories) {
        cats[categories[i]['id']] = categories[i]['name'];
    }

    for (let i in books) {
        books[i]['categories'] = books[i].categories.split(',').map(i => cats[i]).join(',');
    }

    return books;
}
module.exports = router;