const mongoose = require('mongoose')

var IdiomSchema = new mongoose.Schema({
    author: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    uid: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Idiom', IdiomSchema);