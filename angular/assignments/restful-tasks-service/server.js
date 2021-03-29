const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;


mongoose.connect('mongodb://localhost/restful-tasks-crud', { useNewUrlParser: true });


const TaskSchema = new mongoose.Schema ({
    title: { type: String, required: true, minlength: 3, maxlength: 64 },
    description: { type: String, required: true, minlength: 3, maxlength: 255 },
    completed: { type: Boolean, required: true }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json({ extended: true }));


app.get('/', (req, res) => {
  console.log('Angular application served.');
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));