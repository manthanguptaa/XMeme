//importing files
const Meme = require('../model/meme')

//getAllMemes function returns JSON structure with all the memes
exports.getAllMemes = async (req, res, next) => {
    try {
        const memes = await Meme.find().sort({ "upload_time": -1 }).limit(100)
        let arr = []
        for (let i = 0; i < memes.length; ++i) {
            arr[i] = {
                "id": memes[i].id,
                "name": memes[i].name,
                "url": memes[i].url,
                "caption": memes[i].caption
            }
        }
        res.status(200).send(arr)
    } catch (err) {
        res.status(500).send('Sorry! Something is broken :(')
    }
}

//getMemeById function returns JSON structure with the contents of a meme to which id matches 
exports.getMemeById = async (req, res, next) => {
    try {
        const memes = await Meme.findById(req.params.id)
        return res.status(200).json({
            "id": memes.id,
            "name": memes.name,
            "url": memes.url,
            "caption": memes.caption
        })
    } catch (err) {
        res.status(500).send("Sorry! We couldn't find the meme")
    }
}

//postMeme function creates a new meme and returns the content 
exports.postMeme = async (req, res, next) => {
    const newMeme = new Meme(req.body)
    try {
        await newMeme.save()
        return res.status(201).json({ "id": newMeme.id })
    } catch (err) {
        res.status(500).send('Sorry! Something is broken :(')
    }
}

//redirectPost function creates a new meme and redirects to homepage
exports.redirectPost = async (req, res, next) => {
    const newMeme = new Meme(req.body)
    try {
        await newMeme.save()
        return res.redirect('/')
    } catch (err) {
        res.status(500).send('Sorry! Something is broken :(')
    }
}

//updateMeme function updates the content of the meme and returns the updated JSON structure 
exports.updateMeme = async (req, res, next) => {
    try {
        const m = await Meme.findById(req.params.id)
        m.caption = req.body.caption
        m.url = req.body.url
        await m.save()
        return res.sendStatus(200)
    } catch (err) {
        res.status(500).send('Sorry! Something is broken :(')
    }
}