//3rd party libraries
const express = require('express')

//importing core libraries
const path = require('path')

//importing files
const viewController = require('../controllers/viewController')

const router = express.Router()

router.get('/', viewController.getHomePage)

router.get('/add-meme', viewController.getAddMemePage)

module.exports = router