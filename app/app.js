const express = require('express');
const app = express();
const morgan = require('morgan');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
const routes = require("../routes/route");
app.use('/api', routes);

module.exports = app;
