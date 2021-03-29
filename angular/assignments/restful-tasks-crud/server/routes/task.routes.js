const TaskController = require ('../controllers/task.controller');

module.exports = function(app){
    app.get('/api/tasks', TaskController.index);
    app.get('/api/tasks/:id', TaskController.readTask);
    app.post('/api/tasks', TaskController.createTask);
    app.put('/api/tasks/:id', TaskController.updateTask);
    app.delete('/api/tasks/:id', TaskController.deleteTask);
};