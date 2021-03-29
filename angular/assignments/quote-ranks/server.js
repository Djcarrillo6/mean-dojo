const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const PORT = 8000;
const flash = require('express-flash');
var session = require('express-session');


app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(flash());

require('./server/config/mongoose.config');
require('./server/routes/routes.js')(app);

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));