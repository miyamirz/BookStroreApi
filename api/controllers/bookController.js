var mongoose = require('mongoose'),
  Books = mongoose.model('Books');

exports.getAllBooks = function(req, res) {
  Books.find({}, function(err, Books) {
    if (err)
      res.send(err);
    res.json(Books);
  });
};