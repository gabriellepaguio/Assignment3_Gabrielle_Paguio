let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { route } = require('.');

// connect to the assignmentModel

let Assignment = require('../models/assignments');

module.exports.displayAssignmentList = (req,res,next)=>
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
};

// ADD OPERATION

module.exports.displayAddPage = (req,res,next)=>
{
    res.render('assignment/add',{title:'Add Assignemnt'})
};

module.exports.processAddPage = (req,res,next)=>
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
            res.redirect('/assignmentList');
        }
    })
};

// UPDATE OPERATION

module.exports.displayEditPage = (req,res,next)=>
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
            res.render('assignment/edit',{title:'Edit Assignment', assignment: asToEdit});
        }
    });
};

module.exports.processEditPage = (req,res,next)=>
{
    let id = req.params.id;
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
            res.redirect('/assignmentList');
        }
    });
};

// DELETE OPERTAION

module.exports.performDelete = (req,res,next)=>
{
    let id = req.params.id;
    Assignment.deleteOne({_id:id},(err) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignmentList');
        }
    });
};
