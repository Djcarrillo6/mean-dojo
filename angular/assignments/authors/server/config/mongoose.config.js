const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/authors', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to mongodb"))
    .catch(reason => console.log("Something went wrong with connection"));

module.exports = mongoose;