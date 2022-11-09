let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { route } = require('.');

// connect to the assignmentModel

let Assignment = require('../models/assignments');

// CRUD Operation

// READ Operation
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
            res.render('assignment/list',
            {
                // to make button stay active while on the page, title has to be the same as the title in nav_bar
                title: 'Assignments', assignmentList: assignmentList
            })
        }
    });
});

// Add Operation
// Get route to display the add-page (CREATE Operation)

router.get('/add',(req,res,next)=>
{
    res.render('assignment/add',{title:'Add Assignemnt'})
});

// Post route to process the add-page (CREATE Operation)

router.post('/add',(req,res,next)=>
{
    let newAssignment = Assignment
    (
        {
            "Name": req.body.Name,
            "Class": req.body.Class,
            "Due": req.body.Due
        }
    );
    Assignment.create(newAssignment,(err,Assignment)=>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment/list')
        }
    })
});


// Edit Operation
// Get route to display the edit operation (UPDATE Operation)
// uses ID to edit a specific assignment in the database; each assignment gets its own unique ID
router.get('/edit/:id',(req,res,next)=>
{
    let id = req.params.id;
    Assignment.findById(id,(err, asToEdit) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('assignment/edit',{title:'Edit Assignment', assignment:asToEdit});
        }
    });
});

// Post route to display the edit operation (UPDATE Operation) 

router.post('/edit/:id',(req,res,next)=>
{
    let id = req.param.id;
    let updateAs = Assignment
    (
        {
            "_id": id,
            "Name": req.body.Name,
            "Class": req.body.Class,
            "Due": req.body.Due
        }
    );
    Assignment.updateOne({_id:id}, updateAs,(err) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment/list')
        }
    });
});

// Delete Operation
// Get route to perform delete operation (DELETE Operation)

router.get('/delete/:id',(req,res,next)=>
{
    let id = req.param.id;
    Assignment.remove({_id:id},(err) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment/list')
        }
    });
});

// to access the file
module.exports = router;