
exports.getHomePage = (req, res, next) => {
    try {
        res.render('homepage')
    } catch (err) {
        console.log(err)
    }

}