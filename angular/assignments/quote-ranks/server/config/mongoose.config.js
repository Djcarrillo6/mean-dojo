const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/quote-ranks-db', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to MongoDB!"))
    .catch(reason => console.log("Something went wrong with connection!"));

module.exports = mongoose