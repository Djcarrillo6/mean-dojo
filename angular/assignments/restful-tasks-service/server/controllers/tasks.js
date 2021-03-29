const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {

    getAllTasks: function(req, res) {
        Task.find({}, function(err, task_list) {
            task_list = [
                { name:'Learn Angular', description: "Study the framework and build a project."},
                { name:'Learn MERN', description: "Build a React app."},
                { name:'Learn Python', description: 'Python has many libraries.'}
                ];
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else {
                res.json(task_list);
            }
        })
    },
    getTask: function(req, res) {
        Task.find({ _id: req.params.id }, function(err, task_detail) {
            if(err) {
                console.log(err);
                res.json({ 'status': 500, 'errors': err });
            } else {
                res.json(task_detail);
            }
        })
    }

}

// app.get('/api/tasks',(req,res)=>{
//   console.log('tasks?');
//   res.json([
//     { name:'Learn Angular', description: "Study the framework and build a project."},
//     { name:'Learn MERN', description: "Build a React app."},
//     { name:'Learn Python', description: 'Python has many libraries.'}
//     ]);
// });
