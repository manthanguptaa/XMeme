const Meme = require('../model/meme')


//getHomePage function renders the homepage.ejs file to display homepage 
exports.getHomePage = async (req, res, next) => {
    const memes = await Meme.find().sort({ 'upload_time': -1 }).limit(100)
    try {
        return res.status(200).render('homepage', {
            'memes': memes
        })
    } catch (err) {
        res.status(500).send('Sorry! Something is broken :(')
    }
}

//getAddMemePage function renders the add-meme.ejs file to display add-meme page
exports.getAddMemePage = (req, res, next) => {
    try {
        return res.status(200).render('add-meme')
    } catch (err) {
        res.status(500).send('Sorry! Something is broken :(')
    }

}