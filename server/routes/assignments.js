let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { route } = require('.');

// connect to the assignmentModel

let Assignment = require('../models/assignments');
let assignmentController = require('../controller/assignment');

// CRUD Operation

// READ Operation
// Get route for the assignment list

router.get('/', assignmentController.displayAssignmentList);

// Add Operation
// Get route to display the add-page (CREATE Operation)

router.get('/add', assignmentController.displayAddPage);

// Post route to process the add-page (CREATE Operation)

router.post('/add', assignmentController.processAddPage);

// Edit Operation
// Get route to display the edit operation (UPDATE Operation)
// uses ID to edit a specific assignment in the database; each assignment gets its own unique ID
router.get('/edit/:id', assignmentController.displayEditPage);

// Post route to display the edit operation (UPDATE Operation) 

router.post('/edit/:id', assignmentController.processEditPage);

// Delete Operation
// Get route to perform delete operation (DELETE Operation)

router.get('/delete/:id', assignmentController.performDelete);

// to access the file
module.exports = router;