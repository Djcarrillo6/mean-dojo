const mongoose = require('../config/mongoose.config.js');

const AuthorSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    minlength: 2
  }
}, {timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author