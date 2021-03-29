const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
      type: String,
      minlength: [5, "Title length must be at least 5 characters"],
      required: [true, "Title is required"],
  },
  description: {
      type: String,
      minlength: [5, "Description length must be at least 5 characters"],
      required: [true, "description is required"],
      default: "",
  },
  completed: {
      type: Boolean,
      default: false
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);