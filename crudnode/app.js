const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost/test';
const app = express();

mongoose.connect(url, { useNewUrlParser : true, useUnifiedTopology : true }) //establish a connection
    .then(() => {
        console.log("Connected to Database");
        
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

const con = mongoose.connection; //to get hold on connection
// console.log(con.port); shows default mongodb port 27017

con.on('open',  () => { //event on connection
    console.log("Connection is open!!");
});

const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter); //middleware to forward incomming request

app.listen(9000, (req, res) => { //creating a server
    console.log("Server started !");
});
