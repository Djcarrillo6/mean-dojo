const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

require('./server/config/mongoose.config');
require('./server/config/routes');

app.listen(8000,() => {
    console.log(`Listening on port: ${PORT}`);
});