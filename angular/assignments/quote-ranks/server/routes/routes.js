  const controller = require('../controllers/main.controller.js');

module.exports = function(app) {
    app.get('/api/items', controller.index);
    app.get('/api/items/:id', controller.show);
    app.post('/api/items', controller.create);
    app.post('/api/items/:id/quotes', controller.createQuote);
    app.put('/api/items/:id', controller.update);
    app.delete('/api/items/:id/quotes/:quote_id', controller.deleteQuote);
    app.get('/api/authors/:authorsid/quotes/:quotesid/:num', controller.addVote);
}