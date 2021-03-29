const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: [true, 'A note of text is required.'],
      min: [3, 'Note must be at least three characters.']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Note', NoteSchema);