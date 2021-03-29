const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/rate-my-cakes', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(reason => console.log("Something went wrong with connection"));