//getErrorPage function renders the 404.ejs file to display error page 
exports.getErrorPage = (req, res, next) => {
    try {
        return res.status(404).render('404')
    } catch (err) {
        res.status(500).send('Sorry! Something is broken :(')
    }
}