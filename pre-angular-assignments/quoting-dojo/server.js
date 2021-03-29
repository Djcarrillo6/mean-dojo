const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting-dojo', { useNewUrlParser: true });

// Generate schema
const QuoteSchema = new mongoose.Schema({
  name: String,
  text: String
});
const Quote = mongoose.model('Quote', QuoteSchema);


// Routes
app.get('/',(req,res)=>{
  // default loading of index.html
});

app.get('/quotes',(req,res)=>{
  Quote.find() // Find all on the Quote model
  .then(data => res.render('quotes', { quotes: data })) // Resolve successful response and pass object with the data to the tempalte/front-end.  
  .catch(err => console.log(err.message));  // Reject unsuccessful promise, and console.log the error object's message. 
});

app.post('/quotes',(req,res)=>{
  const quote = new Quote();
  quote.name = req.body.name;
  quote.text = req.body.quote;
  quote.save()
  .then(newQuote => console.log('New quote added to DB!', newQuote))
  .catch(err => console.log(err.message));

  res.redirect('/quotes');
});

app.listen(8000,() => {
    console.log(`Listening on port: ${PORT}`);
});