const express = require("express");
//using express module - for url mapping in node js
var app = express();

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/student', (req, res) => {
    let id = req.query.id;
    res.send("Welcome Student "+id);
});

app.get('/student/:id', (req, res) => {
    let id = req.params.id;
    res.send("Welcome Student "+id);
});

app.listen(9000, (req, res) => {
    console.log("OK");
});
