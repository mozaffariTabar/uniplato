const express = require('express');
const router = express.Router();
const { db, query } = require("../model/mysql");
const { authenticateToken } = require('./auth');

router.get("/:isbn?", authenticateToken, (req, res) => {
    db.query(query.readBook(req.params.isbn), (err, books) => {
        if (err) throw err;
        
        if (books.length == 0) {
            return res.status(400).json({ Message: "No books found" });
        }

        db.query(query.readCategory({}), (err, categories) => {
            if (err) throw err;

            let cats = {};
            for (let i in categories) {
                cats[categories[i]['id']] = categories[i]['name'];
            }

            for (let i in books) {
                books[i]['categories'] = books[i].categories.split(',').map(i => cats[i]).join(',');
            }

            res.status(200).json(books);
        });
    });
});

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

router.put("/", authenticateToken, (req, res) => {
    db.query(query.updateBook(req.body), (err) => {
        if (err) throw err;
        res.status(200).json({ Message: "Book updated" })
    });
});

router.delete("/", authenticateToken, (req, res) => {
    db.query(query.deleteBook(req.body.isbn), (err) => {
        if (err) throw err;
        res.status(200).json({ Message: "The book deleted successfully" })
    });
});

module.exports = router;