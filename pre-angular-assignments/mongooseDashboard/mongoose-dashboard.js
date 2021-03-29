const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const PORT = 8000;

mongoose.connect('mongodb://localhost/mongooseDashboard', {useNewURLParser: true});



app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

require('./server/config/routes.js.js.js')(app)


app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
