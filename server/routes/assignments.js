let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { route } = require('.');

// connect to the assignmentModel

let Assignment = require('../models/assignments');

// Read Operation
// Get route for the assignment list

router.get('/',(req,res,next)=>
{
    Assignment.find((err, assignmentList)=>
    {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            // to display on console
            // console.log(AssignmentList);
            res.render('assignments',{title: 'Assignment List', assignmentList: assignmentList})
        }
    });
});

// to access the file
module.exports = router;