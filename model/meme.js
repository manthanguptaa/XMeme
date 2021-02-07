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
    },
    upload_time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Meme', memeSchema)