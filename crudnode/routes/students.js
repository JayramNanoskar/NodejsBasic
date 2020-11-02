const express = require('express');
const router = express.Router(); //creating new router object
const Student = require('../models/student');

router.get('/',  async(req, res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }
    catch(err){
        console.log("Error" + err);
    }
});

router.post('/', async(req, res) => {
    
    const student = new Student({
        name: req.body.name,
        tech: req.body.tech,
        address: req.body.address 
    });

    try{
       const stud = await student.save();
       res.send(stud);
    }
    catch(err){
        console.log("Error"+ err);
    }
});
module.exports = router; //exporting module router 
