const express = require('express');
const router = express.Router(); //creating new router object
const Student = require('../models/student');

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    }
    catch (err) {
        console.log("Error : " + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const studId = req.params.id;
        const student = await Student.findById(studId);
        res.json(student);
    }
    catch (err) {
        console.log("Error : " + err);
    }
});

router.post('/', async (req, res) => {
    // console.log(req);
    const student = new Student({
        name: req.body.name,
        tech: req.body.tech,
        address: req.body.address
    });

    try {
        const stud = await student.save();
        res.send(stud);
    }
    catch (err) {
        console.log("Error : " + err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const studId = req.params.id;
        const student = await Student.findById(studId);
        if (req.body.tech != null) {
            student.tech = req.body.tech;
        }
        if (req.body.name != null) {
            student.name = req.body.name;
        }
        if (req.body.address != null) {
            student.address = req.body.address;
        }
        const updatedStud = await student.save();
        res.send(updatedStud);
    }
    catch (error) {
        console.log("Error : " + error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const studId = req.params.id;
        const student = await Student.findById(studId);

        const deletedStud = await student.delete();
        res.send(deletedStud);
    }
    catch (error) {
        console.log("Error : " + error);
    }
});

module.exports = router; //exporting module router 
