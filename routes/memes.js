//3rd party libraries
const express = require('express')

const Meme = require('../model/meme')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const memes = await Meme.find()
        res.json(memes)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const memes = await Meme.findById(req.params.id)
        res.json(memes)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async (req, res, next) => {
    const memes = new Meme({
        name: req.query.name,
        url: req.query.url,
        caption: req.query.caption
    })

    try {
        const m = await memes.save()
        res.send(m)
    } catch (err) {
        res.send('Error')
    }
})

module.exports = router