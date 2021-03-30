
const quotes = require('../controllers/quotes.controller.js');

module.exports = function(app) {
  app.get('/quotes', quotes.index);
  app.post('/quotes', quotes.create);
}
