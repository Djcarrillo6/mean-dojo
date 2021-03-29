const authors = require('../controllers/authors.controller.js');

module.exports = function(app) {
    app.get('/api/authors', authors.index);
    app.get('/api/authors/:id', authors.show);
    app.post('/api/authors', authors.create);
    app.put('/api/authors/:id', authors.update);
    app.delete('/api/authors/:id', authors.delete);
};