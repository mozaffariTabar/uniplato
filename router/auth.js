import dotenv from 'dotenv'
dotenv.config();
import Router from 'express';
const authRouters = Router();
import jwt from 'jsonwebtoken';
import {db, readAdmin} from "../model/mysql.js";

// Login with email and password
authRouters.post('/', (req, res) => {
    db.query(readAdmin(req.body), (err, results) => {
        if (err) throw err;
        if (results.length == 0) {
            return res.status(400).json({ Message: "Admin not found" });
        }
        const user = { email: req.body.email, password: req.body.password };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken });
    });
});

// Check and verify user information (JWT)
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

export {
    authRouters,
    authenticateToken
}