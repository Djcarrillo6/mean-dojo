const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

require('./server/config/mongoose.config.js');
require('./server/routes/cake.routes.js')(app);


// Catch All Route Hanlder to replace 404 requests.
app.all("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./public/dist/public/index.html"))
);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));