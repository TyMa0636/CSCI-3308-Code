//Part 6: Setting up the 'index' route (home-page of the app)
var express = require('express');
var app = express();

app.get('/', function (request, response) {
   // render the views/index.ejs template file
   response.render('index', {title: 'WeatherTech'})
});

module.exports = app;