const Meme = require('../model/meme')

exports.getAllMemes = async (req, res, next) => {
    try {
        const memes = await Meme.find()
        res.json(memes)
    } catch (err) {
        res.send('Error ' + err)
    }
}

exports.getMemeById = async (req, res, next) => {
    try {
        const memes = await Meme.findById(req.params.id)
        res.json(memes)
    } catch (err) {
        res.send('Error ' + err)
    }
}

exports.postMeme = async (req, res, next) => {
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
}

exports.updateMeme = async (req, res, next) => {
    try {
        const m = await Meme.findById(req.params.id)
        m.caption = req.body.caption
        m.url = req.body.url
        const updatedMeme = await m.save()
        res.json(updatedMeme)
    } catch (err) {
        res.send('Error')
    }
}