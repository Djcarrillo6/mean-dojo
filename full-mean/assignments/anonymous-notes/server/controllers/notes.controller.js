const Note = require('../models/Note');

module.exports = {
    index: (req,res) => {
      Note.find()
      .then((notes) => res.json({message: "Fetched all notes from the database.", data: notes}))
      .catch(err => res.json({message: err.message}));
    },
    create: (req,res) => {
      Note.create(req.body)
          .then((note) => res.json({message: "Anonymous Note saved!", data: note}))
          .catch(err => res.json({message: err.message}))
  }
};