const mongoose = require('mongoose');
module.exports = function () {
    mongoose.connect('mongodb://mongo/db')
        .then(() => console.log('Connected to database'))
        .catch(() => console.log('Could not connect to database'))
}
