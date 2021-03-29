const CakeController = require('../controllers/cake.controller');

module.exports = (app) => {
  app.get('/cakes', CakeController.index),
  app.get('/cakes/:id', CakeController.show),
  app.post('/cakes', CakeController.create),
  app.put('/cakes/:id', CakeController.update),
  app.delete('/cakes/:id', CakeController.delete)
};