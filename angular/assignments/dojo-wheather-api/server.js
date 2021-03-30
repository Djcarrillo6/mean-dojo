
const express = require('express');
const app = express();
var path = require('path');
const server = app.listen(8000);


app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public/dist/public' ));


app.use(express.urlencoded({extended: true}));
var bodyParser = require('body-parser')
app.use(bodyParser.json())
//mongoose
require('./server/config/routes')(app)
require('./server/config/mongoose')