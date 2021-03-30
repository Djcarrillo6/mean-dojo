
const products = require('../controllers/products.controller.js');

module.exports = function(app) {
    app.get('/api/products', products.index);
    app.get('/api/products/:id', products.show);
    app.post('/api/products', products.create);
    app.put('/api/products/:id', products.update);
    app.delete('/api/products/:id', products.delete);
};