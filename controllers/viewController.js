
//getHomePage function renders the homepage.ejs file to display homepage 
exports.getHomePage = (req, res, next) => {
    try {
        res.render('homepage')
    } catch (err) {
        console.log(err)
    }

}

//getAddMemePage function renders the add-meme.ejs file to display add-mee page
exports.getAddMemePage = (req, res, next) => {
    try {
        res.render('add-meme')
    } catch (err) {
        console.log(err)
    }

}