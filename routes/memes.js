//3rd party libraries
const express = require('express')

//importing files
const memeController = require('../controllers/memeController')

const router = express.Router()

//GET request /memes to display all the memes
router.get('/', memeController.getAllMemes)

//GET request /memes/id to display all the memes with id
router.get('/:id', memeController.getMemeById)

//POST request /memes to save new meme in database
router.post('/', memeController.postMeme)

// POST request /memes/redirect to save a new meme in database and redirect to homepage
router.post('/redirect', memeController.redirectPost)

//PATCH request /memes/id to update meme content in the database
router.patch('/:id', memeController.updateMeme)

module.exports = router