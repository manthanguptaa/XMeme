//3rd party libraries
const express = require('express')

const memeController = require('../controllers/memeController')

const router = express.Router()

router.get('/', memeController.getAllMemes)

router.get('/:id', memeController.getMemeById)

router.post('/', memeController.postMeme)

router.patch('/:id', memeController.updateMeme)

module.exports = router