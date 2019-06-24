const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    }
})
const User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;
exports.User = User