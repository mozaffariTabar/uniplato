const express = require('express');
const router = express.Router();
const { db, query } = require("../model/mysql");
const { authenticateToken } = require('./auth');

// Add new admin
router.post("/", authenticateToken, (req, res) => {
    db.query(query.readAdmin(req.body.isbn), (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
            return res.status(409).json({ Message: "This Admin is already exists!" })
        }

        db.query(query.createAdmin(req.body), (err) => {
            if (err) throw err;
            res.status(201).json({ Message: "New Admin added successfully" })
        });
    });
});

// Delete created admin
// Keep in mind that you can't remove main admin -> (email:admin@admin.com)
router.delete("/", authenticateToken, (req, res) => {
    if (req.body.email === 'admin@admin.com') {
        return res.status(406).json({ Message: "You can't remove main admin" })
    }
    db.query(query.deleteAdmin(req.body), (err) => {
        if (err) throw err;
        res.status(200).json({ Message: "Admin deleted successfully" })
    });
});

module.exports = router;