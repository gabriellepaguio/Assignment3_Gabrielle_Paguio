// COLLECTION NAME: assignments

let mongoose = require('mongoose');

// create assignments model
let assignmentsModel = mongoose.Schema
(
    {
        Name: String,
        Class: String,
        Due: String,
        Weight: String
    },
    {
        collection: "assignments"
    }
);

module.exports = mongoose.model('Assignment', assignmentsModel);
