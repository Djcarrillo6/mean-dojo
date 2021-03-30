const mongoose = require('../config/mongoose.config.js');
var validate = require('mongoose-validator');

// Ex: more custom validations may be added, see mongoose-validator docs.
var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  })
];

const ProductSchema = new mongoose.Schema({
  title: {type: String, minlength:[4, "Title must be atleast 4 characters long"], required:true},
  price: {type: Number, required:[true, "Price is required"]},
  imageUrl: {type: String, required:[true, "Image is missing"]}
}, {timestamps:true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;