// server/config/routes.js

module.exports = function(app) {

  const task = require('../controllers/tasks.js');

  // GET '/tasks' - retrieve all tasks. 
  app.get('/tasks', function(req, res) {
      task.getAllTasks(req, res);
  });

  // GET '/tasks/:id' - list task for that id.  
  app.get('/tasks/:id', function(req, res) {
      task.getTask(req, res);
  });

}