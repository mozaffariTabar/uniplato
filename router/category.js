const express = require('express');
const router = express.Router();
const { db, query } = require("../database/mysql");
const { authenticateToken } = require('./auth');

router.get("/:id?", authenticateToken, (req, res) => {
    db.query(query.readCategory({ id: req.params.id }), (err, results) => {
    if (err) throw err;
    results.length === 0
        ? res.status(400).json({ Message: "No cagetories found" })
        : res.json(results);
    });
});

router.post("/", authenticateToken, (req, res) => {
    db.query(query.readCategory({ name: req.body.name }), (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
            return res.status(409).json({ Message: "This category is already exists!" });
        }

        db.query(query.createCategory(req.body), (err) => {
            if (err) throw err;
            res.status(201).json({ Message: "New category added successfully" });
        });
    });
});

router.put("/", authenticateToken, (req, res) => {
    db.query(query.updateCategory(req.body), (err) => {
    if (err) throw err;
    res.status(200).json({ Message: "Category updated" })
    });
});

module.exports = router;