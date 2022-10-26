const express = require("express");
const dotenv = require('dotenv').config();
const colors = require('colors');

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db');

const port = process.env.port || 5010;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/tukren', require('./routes/wordRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));