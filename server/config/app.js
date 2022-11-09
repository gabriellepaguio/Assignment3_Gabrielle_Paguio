// Assignment 2: Express JS
// Gabrielle Paugio
// 100820990
//MAIN FILE: connects all files together

//require used to access 3rd party libraries, within brackets are 3rd party libraries
/*install 3rd party packages*/
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// config MongoDB
let mongoose = require('mongoose');
let DB = require('./db');

// connets mongoose to DB URI from db.js file
mongoose.connect(DB.URI);
let mongDB = mongoose.connection;
// if it cannot successfully connect to the db, then it will display an error message
mongDB.on('error',console.error.bind(console,'Connection Error:'));
mongDB.once('open',()=>
{
  // if successfully connected to db, then it will display this message
  console.log('connected to MongoDB');
});

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let assignmentsRouter = require('../routes/assignments')

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public'))); //static files are in public, don't have to specify -> /public
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter); //localhost:2000
app.use('/users', usersRouter); // localhost:2000/users
app.use('/assignmentList', assignmentsRouter); // localhost:2000/assignmentList

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', 
  {
    title:"Error"
  }
  );
});

module.exports = app;
