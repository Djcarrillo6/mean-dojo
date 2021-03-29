const Cake = require('../models/Cake');

module.exports = {
  index: (req,res) => {
      Cake.find({})
          .then((cakes) => res.json({message:"Fetched all cakes in DB.", data: cakes}))
          .catch(err => res.json({message: err.message}))
  },
  show: (req,res) => {
      Cake.find({_id: req.params.id})
          .then((cake) => res.json({message: "Fetched single cake from DB by it's ID.", data: cake}))
          .catch(err => res.json({message: err.message}))
  },
  create: (req,res) => {
      console.log('Successfully posted a cake to the DB: ', req.body);
      Cake.create(req.body)
          .then((cake)=>res.json({message: "Created cake!", data: cake}))
          .catch(err => res.json({message: err.message}))
  },
  update: (req,res) => {
      console.log('Current cake rating: ', req.body.rating);
      console.log('Updated cake data: ', req.body);
      Cake.findOneAndUpdate({_id:req.params.id},{$push: {review: req.body.
          review, rating: req.body.rating}})
          .then(cake => res.json({message:"Updated cake!", data:cake}))
          .catch(err => res.json({message: err.message}))
  },
  delete: (req,res) => {
      Cake.remove({_id:req.params.id})
          .then(()=> res.json({message: "Cake deleted from DB."}))
          .catch(err => res.json({message: err.message}))
  }   
};