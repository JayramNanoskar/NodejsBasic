const express = require('express');
const router = express.Router(); //creating new router object

router.get('/', async(req, res) => {
    try{
        res.send("get working ");
    }
    catch(err){
        console.log("Error" + err);
    }
});

module.exports = router; //exporting module router 
