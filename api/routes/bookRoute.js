module.exports = function(app){

    var bookController = require('../controllers/bookController');

    app.route('/getBooks')
       .get(bookController.getAllBooks);
}


 
