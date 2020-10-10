require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { authRouters } = require('./router/auth');
const adminRouters = require('./router/admin');
const bookRouters = require('./router/book');
const categoryRouters = require('./router/category');

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


// HERUKO
// JHCS&^S&^Ejh34r8