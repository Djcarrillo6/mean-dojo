const Author = require('../models/Author');

module.exports = {
  index: function(req, res){
      Author.find({})
      .then(authors => res.json(authors))
      .catch(err => res.json(err));
  },
  create: function(req, res){
      const author = new Author()
      author.name = req.body.name;
      author.save()
      .then(authorObject =>{
          res.json(authorObject)
      })
      .catch(err => res.json(err.message));
  },
  show: function(req, res){
      Author.findById({_id: req.params.id})
      .then(authorObject =>{
          res.json(authorObject)
      })
      .catch(err => res.json(err));
  },	
  update: function(req, res){
      Author.update({_id: req.params.id}, {name: req.body.name})
      .then(editedAuthorObject =>{
          console.log(editedAuthorObject)
          res.json(editedAuthorObject)
      })
      .catch(err => res.json(err));
  },
  delete: function(req, res){
      Author.remove({_id: req.params.id})
      .then(authorObject =>{
          res.json(authorObject)
      })
      .catch(err => res.json(err));
  },
};