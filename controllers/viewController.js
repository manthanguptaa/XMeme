const memeController = require('./memeController')

const Meme = require('../model/meme')


//getHomePage function renders the homepage.ejs file to display homepage 
exports.getHomePage = async(req, res, next) => {
    const memes = await Meme.find()

    res.render('homepage',{
        'memes': memes
    })
}

//getAddMemePage function renders the add-meme.ejs file to display add-mee page
exports.getAddMemePage = (req, res, next) => {
    try {
        res.render('add-meme')
    } catch (err) {
        console.log(err)
    }

}