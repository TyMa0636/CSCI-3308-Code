var express = require('express');
var db = require('../database');
//var pg = require('pg');
var app = express();
module.exports = app;

app.get('/', function (request, response) {
    response.render('index', {
        UserId: '',
        Password: ''
    })
});



app.get('/pizzas', function (request, response)
{
    response.render('store/pizzas', {})
});



app.get('/sandwiches', function (request,response) {
	response.render('store/sandwiches',{})
});

app.get('/signup', function (request,response) {
	response.render('store/signup', {
		Name: '',
		UserId: '',
		Password: ''
	})
});

app.post('/signup', function (request,response) {
	  request.assert('Name', 'Name is required').notEmpty();
    request.assert('UserId', 'UserId is required').notEmpty();
    request.assert('Password', 'Password is required').notEmpty();

    errors = request.validationErrors();
    if (!errors) { // No validation errors

        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            Name: request.sanitize('Name').escape().trim(),
            UserId: request.sanitize('UserId').escape().trim(),
            Password: request.sanitize('Password').escape().trim()
        };

        //var conString = "postgres://warrenfulton:@localhost:5432/weathertech";
        //var client = new pg.Client(conString);
        //client.connect();
       	
       	//var query = client.query("SELECT * FROM users WHERE UserId = $1", [item.UserId]);

       	/*query.on('row', function(row) {
       		if (row > 0) {
       			request.flash('error', 'Username already in use.');
       			response.render('store/signup', {
       				Name: item.Name,
       				Password: item.Password
       			});
       		} else {
       			var query2 = client.query("INSERT INTO users (Name, UserId, Password) VALUES ($1,$2,$3)", [item.Name, item.UserId, item.Password]);

       			request.flash('success',"You can now log in.");
       			response.render('../index', {
       				Name: item.Name,
       				UserId: item.UserId,
       				Password: item.Password
       			});
       		}
       	});

       	query.on('end', function() {
		    client.end();
		});*/

    var query = 'SELECT * FROM users WHERE userid =\'' + item.UserId +'\';';


    /*db.none('INSERT INTO users(name, userid, password) VALUES($1, $2, $3)', [item.Name, item.UserId, item.Password])
      .then(function(result){
      request.flash('success',"You can now log in.");
            response.render('../index', {
              Name: item.Name,
              UserId: item.UserId,
              Password: item.Password
            });
    });*/
      db.none('INSERT INTO users(name, userid, password) VALUES($1, $2, $3)', [item.Name, item.UserId, item.Password])
        .then(function (result)
        {
          request.flash('success', 'Data added successfully!');
                // render views/store/add.ejs
                response.render('index', {
                    
                })
            }).catch(function (err) {
            request.flash('error', 'User already exists');
            // render views/store/add.ejs
            response.render('store/signup', {
            })
        });

      db.any(query)
        .then(function(rows){
          if(rows.length > 0)
          {
            request.flash('error', 'User already exists');

            response.render('store/signup',{

            });
          }

    }).catch(function (err) {
            request.flash('error', err);
            // render views/store/add.ejs
            response.render('store/signup', {
                
            })
      });
  }
});
         











