const mongoose = require('../config/mongoose.config.js');
var validate = require('mongoose-validator');

// Ex: more custom validations may be added, see mongoose-validator docs.
var nameValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 50],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
    })
  ]


const QuoteSchema = new mongoose.Schema({
    author: { type: String, required: true, minlength: 3 },
    quotes: [{
        content: { type: String, required: true, validate: nameValidator, minlength: 3 },
        votes: { type: Number, required: true, default: 0 },
    }]
}, { timestamps: true });

const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote