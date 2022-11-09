const { Router } = require('express');
var express = require('express');
var app = express.Router();
let indexController = require("../controller/index");

/* GET splash page. */
app.get('/', indexController.displaySplashPage);

/* GET main page. */
app.get('/main', indexController.displayMainPage);

/* GET about page. */
app.get('/about', indexController.displayAboutPage);


module.exports = app;

