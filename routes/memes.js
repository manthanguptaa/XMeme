//3rd party libraries
const express = require('express')

const meme = require('../model/meme')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const memes = await meme.find()
        res.json(memes)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async (req, res, next) => {
    
})

module.exports = router