var mongoose = require('mongoose');
var Artist = require('./Artist')

module.exports = mongoose.model('Movie', mongoose.Schema({
    id: String,
    name: String,
    year: String,
    director: String,
    link: String,
    image: String,
    artists : [Artist]
}));

