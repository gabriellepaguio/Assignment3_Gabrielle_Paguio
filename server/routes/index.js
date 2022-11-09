var express = require('express');
var app = express.Router();

/* GET splash page. */
app.get('/', function(req, res, next) {
  // create a page for us
  res.render('index', { 
    title: 'Home'});
});

/* GET home page. */
app.get('/home', function(req, res, next) {
  // create a page for us
  res.render('index', { 
    title: 'Home'});
});

/* GET home page. */
app.get('/main', function(req, res, next) {
  // create a page for us
  res.render('main', { 
    title: 'Main Page'});
});

/* GET home page. */
app.get('/about', function(req, res, next) {
  // create a page for us
  res.render('about', { 
    title: 'About Page'});
});


module.exports = app;

