const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true,
        default: "C"
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema); //exporting student schema
