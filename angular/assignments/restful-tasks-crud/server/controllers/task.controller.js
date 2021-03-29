const Task = require("../models/Task");

module.exports = {
    index: (req,res) => {
        Task.find({})
            .then((tasks) => res.json({message:"Server response of all tasks: ", data: tasks}))
            .catch(err => res.json({message: err.message}))
    },
    readTask: (req,res) => {
        Task.find({_id: req.params.id})
            .then((task) => res.json({message: "Found Task.", data: task}))
            .catch(err => res.json({message: err.message}))
    },
    createTask: (req,res) => {
        Task.create(req.body)
            .then((task)=>res.json({message: "Created Task.", data: task}))
            .catch(err => res.json({message: err.message}))
    },
    updateTask: (req,res) => {
        Task.findOneAndUpdate({_id:req.params.id},req.body)
            .then(task => res.json({message:"Task Updated.",data:task}))
            .catch(err => res.json({message: err.message}))
    },
    deleteTask: (req,res) => {
        Task.remove({_id:req.params.id})
            .then(()=> res.json({message: "Task Deleted."}))
            .catch(err => res.json({message: err.message}))
    }
};
