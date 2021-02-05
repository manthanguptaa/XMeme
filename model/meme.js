//3rd party library
const mongoose = require('mongoose')

//Meme Schema
const memeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Meme', memeSchema)