var mongoose = require('mongoose');

module.exports = mongoose.model('Movie', mongoose.Schema({
    id: String,
    name: String,
    surname: String,
    age: Number
}));