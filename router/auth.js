require("dotenv").config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { db, query } = require("../model/mysql");

router.post('/', (req, res) => {
    db.query(query.readAdmin(req.body), (err, results) => {
        if (err) throw err;
        if (results.length == 0) {
            return res.status(400).json({ Message: "Admin not found" });
        }
        const user = { email: req.body.email, password: req.body.password };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken });
    });
});

function authenticateToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email, password) => {
        if (err) return res.sendStatus(403);
        req.email = email;
        req.password = password;
    })
    next();
}

module.exports = {
    authRouters: router,
    authenticateToken
}