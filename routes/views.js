//3rd party libraries
const express = require('express')

//importing core libraries
const path = require('path')

//importing files
const viewController = require('../controllers/viewController')

const router = express.Router()

// GET request / to display the homepage
router.get('/', viewController.getHomePage)

//GET request to display add-meme screen
router.get('/add-meme', viewController.getAddMemePage)

module.exports = router