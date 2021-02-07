//importing files
const Meme = require('../model/meme')

//getAllMemes function returns JSON structure with all the memes
exports.getAllMemes = async (req, res, next) => {
    try {
        const memes = await Meme.find()
        return res.json(memes)
    } catch (err) {
        res.send('Error ' + err)
    }
}

//getMemeById function returns JSON structure with the contents of a meme to which id matches 
exports.getMemeById = async (req, res, next) => {
    try {
        const memes = await Meme.findById(req.params.id)
        return res.json(memes)
    } catch (err) {
        res.send('Error ' + err)
    }
}

//postMeme function creates a new meme and returns the content 
exports.postMeme = async (req, res, next) => {
    const newMeme = new Meme(req.body)
    try {
        await newMeme.save()
        return res.json(newMeme.id,)
    } catch (err) {
        res.send(err)
    }
}

//redirectPost function creates a new meme and redirects to homepage
exports.redirectPost = async (req, res, next) => {
    const newMeme = new Meme(req.body)
    try {
        await newMeme.save()
        return res.redirect('/')
    } catch (err) {
        res.send(err)
    }
}

//updateMeme function updates the content of the meme and returns the updated JSON structure 
exports.updateMeme = async (req, res, next) => {
    try {
        const m = await Meme.findById(req.params.id)
        m.caption = req.body.caption
        m.url = req.body.url
        const updatedMeme = await m.save()
        return res.json(updatedMeme)
    } catch (err) {
        res.send('Error')
    }
}