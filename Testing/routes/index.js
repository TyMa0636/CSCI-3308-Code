//Part 6: Setting up the 'index' route (home-page of the app)
var express = require('express');
var app = express();

app.get('/', function (request, response) {
   // render the views/index.ejs template file
   /*if(loggedin)
   {
   	http session 
   	//render index page
   }else{
   	//render home page 
   }*/
   response.render('index')
});

module.exports = app;