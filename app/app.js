const express = require("express");
const app = express();
const morgan = require("morgan");

//middleware for logging
app.use(morgan("dev"))
//parsing
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.get("/", (req,res,next) => {
    res.status(201).json({
        message: "Service is UP!",
        method: req.method
    })
});

//middleware to handle errors and bad urls's
app.use((req,res,next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});


app.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status
        }
    })
});

module.exports = app;