const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 8000;

const flash = require('express-flash');
app.use(flash());

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.config.js');
require('./server/routes/authors.routes.js')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(PORT, () => console.log(`Server now listening on port: ${PORT}`));