let express = require('express');
let router = express.Router();

module.exports.displaySplashPage = (req,res,next) =>
{
    res.render('index', {title: 'Splash'});
};

module.exports.displayMainPage = function(req, res, next)
{
    // create a page for us
    res.render('main', {title: 'Main'});
};

module.exports.displayAboutPage = function(req, res, next) 
{
    res.render('about', {title: 'About Page'});
};