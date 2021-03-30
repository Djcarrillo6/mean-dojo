const mongoose = require('mongoose')

// Generate schema
const QuoteSchema = new mongoose.Schema({
  name: String,
  text: String
});
const Quote = mongoose.model('Quote', QuoteSchema);