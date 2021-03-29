const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, '/public/dist/public')));

mongoose.connect('mongodb://localhost/restful-tasks-api');


require('./server/models/Task.js');
require('./server/config/routes.js')(app);

app.listen(PORT, () => console.log(`Server now listening on port: ${PORT}`));