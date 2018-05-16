var express = require('express');
var app = express();

var port = process.env.port || 8000;
var mongoose = require('mongoose');
    Book = require('./api/models/bookModel');
    bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BooksDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Routes = require('./api/routes/bookRoute');
Routes(app);
app.listen(port);

console.log('App is listening for bookstore api at :',port);