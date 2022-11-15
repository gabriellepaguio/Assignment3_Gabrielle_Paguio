const { Router } = require('express');
var express = require('express');
var app = express.Router();
let indexController = require("../controller/index");

/* GET splash page. */
app.get('/', indexController.displaySplashPage);

app.get('/home', indexController.displaySplashPage);

module.exports = app;

