//We need to make any HTML files that are changing (i.e. active orders) into a .ejs file so that
//the backend is able to change and update that page. 
//We also need to include 
//var store = require('./routes/store');
//app.use('/store', store);
//So that we are able to access the store/add or /delete or /edit or /list functions


var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;


//We can move this joining code to our menuusers.sql file. However then we have our tables connected
//so if we want to just look at one table, it might make it more difficult

/*SELECT users.name, users.UserId, food.name as food_name, food.Password, active_orders.PickupTime from users
inner join active_orders on active_orders.UserId = users.UserId
inner join food on food.foodId = active_orders.foodId;
 */

//TODO
//app.post to put information onto the server... Uses for login
    //I think we already did this because we have our app.get and app.post for when we want to add
    //a new user. This should take care of adding their info to our database

//app.put  update to the server... use for active orders i think
    //I'm not quite sure how to approach this problem because we need to add the user's inputted data
    //and then display the table to the restaurant side.
    //I think we can use this code:
    /*db.any(query)
        .then(function (rows) {
            // render views/store/list.ejs template file
            response.render('store/list', {
                title: 'Active Orders',
                data: rows
            })
        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('store/list', {
                title: 'Active Orders',
                data: ''
            })
        })
    */
    //to display the active orders information, I am just unsure of where to place this section of code
    //so that the regular user cannot see it.


//stateless no knowledge of prior requests
app.get('/', function (request, response){
    var query = 'SELECT * FROM active_orders;';

    db.any(query)
        .then(function(rows){
            response.render('store/list', {
                title: 'Active Orders',
                data: rows
        })
    })
    .catch(function (err){
        request.flash('error', err);
        response.render('store/list', {
            title: 'Active Orders',
            data: ''
        })
    })
});

app.get('/add', function (request, response) {
    response.render('store/login', {
        UserId: '',
        Password: ''
    });
});

app.post('/login', function(request, response){

     var input = {
        userId: request.sanitize('userId').escape().trim(),
        paswrd: request.sanitize('paswrd').escape().trim()
    };

    var query = 'SELECT * FROM users WHERE userid = ' + input.userId;

    db.any(query)
        .then(function(rows){
            if(rows.length > 0) {
                request.flash('success', 'Data added successfully!');
                response.render('store/header', {});
            } else {
                //request.flash('error', error_message);
                //response.render('store/header', {});
            }
    })
    .catch(function (err){
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('store/list', {
            title: 'Active Orders',
            data: ''
        })
    })
    
    

    //I don't think we need this code because we don't need to display anything (like we don't
    //have anything we want to display right away) from our tables

    /*db.any(query)
        .then(function (rows) {
            // render views/store/list.ejs template file
            response.render('store/list', {
                title: 'Store listing',
                data: rows
            })
        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('store/list', {
                title: 'Store listing',
                data: ''
            })
        })*/
});

/*app.get('/add', function (request, response)
{
    response.render('store/add', {
        Name: '',
        UserId: '',
        Password: ''
    })
});

app.post('/add', function (request, response){
//create new user
    request.assert('Name', 'Name is required').notEmpty();
    request.assert('UserId', 'UserId is required').notEmpty();
    request.assert('Password', 'Password is required').notEmpty();

    errors = request.validationErrors();
    if (!errors) { // No validation errors
        user = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            Name: request.sanitize('Name').escape().trim(),
            UserId: request.sanitize('UserId').escape().trim(),
            Password: request.sanitize('Password').escape().trim()
        };
        // Running SQL query to insert data into the store table
        db.none('INSERT INTO user(Name, UserId, Password) VALUES($1, $2, $3)', [user.Name, user.UserId, user.Password])
            .then(function (result) {
                request.flash('success', 'Data added successfully!');
                // render views/store/add.ejs
            }).catch(function (err) {
            request.flash('error', err);
            
        })
    } else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
    }
});*/

/*app.get('/add', function (request, response)
{
    Response.render('store/add',
    {
        foodId: ''
    })
});

app.post('/add', function (request, response)
{
//add order to active orders
    request.assert('foodID', 'foodId is required').notEmpty();

    //var  input =
        //{
            //food = request.sanitize('foodId').escape().trim()
//};

    var query = 'SELECT Name FROM sandwich WHERE input.Food = sandID;';

    if(query == '')
    {
        query = 'SELECT Name FROM pizza_calzone WHERE input.Food = pizzaID;';
    }

    var numSanOrders = 'SELECT COUNT * FROM active_orders WHERE foodId < 15;';
    var numPizOrders = 'SELECT COUNT * FROM active_orders WHERE foodId > 14;';
    var  pickUpTime = ((numSanOrders*7)/3) + ((numPizOrders*20)/5);
    // Running SQL query to insert data into the store table
    db.none('INSERT INTO active_orders(UserName, user, PickupTime) VALUES($1, $2, $3)', [current_userId, query, pickUpTime])
        .then(function (result) {
            request.flash('success', 'Data added successfully!');

    }) /*else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('store/add', {
            title: 'Add New user',
            UserName: request.body.current_userId,
            user: request.body.query,
            PickupTime: request.body.pickUpTime
    }
});*/


