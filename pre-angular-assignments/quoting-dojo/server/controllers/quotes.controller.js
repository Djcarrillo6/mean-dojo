const Quote = require('../models/Quote'); 


module.exports = {
  index: (req, res) => {
    Quote.find({})
    .then(data => res.render('quotes', { quotes: data })) // Resolve successful response and pass object with the data to the tempalte/front-end.  
    .catch(err => console.log(err.message));  // Reject unsuccessful promise, and console.log the error object's message. 
  },
  create: (req, res) => {
    const quote = new Quote();
    quote.name = req.body.name;
    quote.text = req.body.quote;
    quote.save()
    .then(newQuote => console.log('New quote added to DB!', newQuote))
    .catch(err => console.log(err.message));
  
    res.redirect('/quotes');
  }
}