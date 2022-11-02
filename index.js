const express = require("express");
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors');

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db');

const port = process.env.PORT || 5010;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

app.use('/api/blog', require('./routes/blogRoutes'));
app.use('/api/tukren', require('./routes/wordRoutes'));



app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));