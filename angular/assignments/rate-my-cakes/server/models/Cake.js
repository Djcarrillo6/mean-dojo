const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
  baker:{
    type: String,
    minlength: 2,
    required: true
  },
  review: [{type:String, minlength: 2}],
  rating:[{type: Number}],
  image:{
    type: String,
    required: true
},
});

const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake;