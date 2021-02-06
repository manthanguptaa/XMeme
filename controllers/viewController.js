
exports.getHomePage = (req, res, next) => {
    try {
        res.render('homepage')
    } catch (err) {
        console.log(err)
    }

}

exports.getAddMemePage = (req, res, next) => {
    try {
        res.render('add-meme')
    } catch (err) {
        console.log(err)
    }

}