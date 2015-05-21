var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Saree = new Schema({  
    image: { type: String},  
    name: { type: String},  
    price: { type: Number},  
    color: { type: String}, 
    size: { type: String}, 
    available: { type: String},
    delivery: { type: String}
});

module.exports = mongoose.model('Saree', Saree);