const NoteController = require('../controllers/notes.controller');

module.exports = (app) => {
  app.get('/api/notes', NoteController.index),
  app.post('/api/notes', NoteController.create)
};