var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
                         id:{
                             type:Number,
                             unique:true
                         },
                         title:{
                             type:String

                         },
                         description:{
                             type:String
                         }
});

var Books = mongoose.model('Books',BookSchema);

module.exports = Books;