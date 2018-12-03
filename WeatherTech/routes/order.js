var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.get('/order', function(request,response){
	response.render('index',{
		UserId: '',
		FoodName: ''
	})
});

//needs the order page to finish

app.post('/order', function(request, response){
	db.none('INSERT INTO activeorders(username, item) VALUES($1, $2)', [item.Name, item.item])
	.then(function (result){
		request.flash('success', 'Order placed');
		response.render('index',{})
		.catch(function (err){
			request.flash('error', 'Please enter valid information');
			response.render(/*path to same page*/,{})
		});
	}
})