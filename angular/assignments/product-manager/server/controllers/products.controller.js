const Product = require('../models/Product');

module.exports = {
  index: (req,res) => {
      Product.find({})
          .then((products) => res.json({message:"Fetched all products in DB.", data: products}))
          .catch(err => res.json({message: err.message}))
  },
  show: (req,res) => {
    Product.find({_id: req.params.id})
          .then((product) => res.json({message: "Fetched single product from DB by it's ID.", data: product}))
          .catch(err => res.json({message: err.message}))
  },
  create: (req,res) => {
      console.log('Successfully posted a product to the DB: ', req.body);
      Product.create(req.body)
          .then((product)=>res.json({message: "Created product!", data: product}))
          .catch(err => res.json({message: err.message}))
  },
  update: (req,res) => {
      Product.findByIdAndUpdate({_id: req.params.id}, req.body, { upsert: true, new: true, rawResult: true })
          .then(product => {
            console.log('Updated product data: ', req.body);
            res.json({message:"Updated product!", data:product})})
          .catch(err => res.json({message: err.message}))
  },
  delete: (req,res) => {
    Product.remove({_id:req.params.id})
          .then(()=> res.json({message: "Cake deleted from DB."}))
          .catch(err => res.json({message: err.message}))
  }   
};