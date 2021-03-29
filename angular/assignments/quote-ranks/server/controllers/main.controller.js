const Quote = require('../models/Quote.js');


module.exports = {
    index: function(req, res){
        Quote.find({})
            .then(data => {
                console.log(`Fetched all Quote model objects in the database: `, data);
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
    create: function(req, res){
      const quote = new Quote()
      quote.author = req.body.author;
      quote.save()
            .then(data => {
              console.log('A new Quote model object has been saved to the database: ', data);
                res.json(data);
            })
            .catch(err => {
              res.json(err);
            });
    },
    createQuote: function(req, res){
      Quote.findById({_id: req.params.id})
      .then(quoteToUpdate => {
          console.log(req.body.content);
          quoteToUpdate.quotes.push({ content: req.body.content});
          quoteToUpdate.save()
              .then(quote => {
                console.log(`Saved a new quote to the collection for user:${req.params.id}`);
                  res.json(quote);
              })
              .catch(err => {
                if (err.name == 'ValidationError') {
                    console.error('Error Validating!', err);
                    res.status(422).json(err);
                } else {
                    console.error(err);
                    res.status(500).json(err);
                }
              });
      })
      .catch(err =>{
          res.json(err);
      });
  },
    show: function(req, res){
        Quote.findById({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    },
    update: function(req, res){
        Quote.updateOne({_id: req.params.id}, {author: req.body.author})
        .then(data =>{
          console.log('Updated the author on the Quote object: ', data);
          res.json(data);
      })
      .catch(err => res.json(err));
    },
    deleteQuote(req, res) {
        const { id, quote_id } = req.params;
        console.log(id, quote_id, req.params);
        Quote.findByIdAndUpdate({_id: id}, { $pull: { quotes: { _id: quote_id } } })
          .then(data => {
              console.log('Removed quote', data);
              res.json(data);
          })
          .catch(err => res.json(err));
      },
      addVote: function(req, res){
        var num= req.params.num;
         Quote.findOneAndUpdate({"_id": req.params.authorsid, "quotes._id": req.params.quotesid}, {$set: {"quotes.$.votes":num}})
        .then((data)=>console.log(data)||res.json(data))
        .catch((err)=>console.log(err)||res.json(err)) 
    }
};
