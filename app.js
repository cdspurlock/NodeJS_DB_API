const express = require('express');
const morgan = require('morgan');
const router = require("./route");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Route
app.use("/", router);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

