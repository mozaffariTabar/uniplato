import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import bodyParser from 'body-parser';
import { authRouters } from './router/auth.js';
import adminRouters from './router/admin.js';
import bookRouters from './router/book.js';
import categoryRouters from './router/category.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routers
app.use('/api/login', authRouters);
app.use('/api/admin', adminRouters);
app.use('/api/book', bookRouters);
app.use('/api/category', categoryRouters);

app.listen(process.env.SERVER_PORT || 4000, () => {
  console.log(
    `Server started on port ${
      process.env.SERVER_PORT || 4000
    }`
  );
});