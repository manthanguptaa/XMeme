//3rd party libraries
const express = require('express')

//importing core libraries
const path = require('path')

//importing files
const viewController = require('../controllers/viewController')

const router = express.Router()

// GET request / to display the homepage
/**
 * @swagger
 * /:
 *  get:
 *   summary: get all memes displayed on the homepage
 *   description: get all memes displayed on the homepage
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/', viewController.getHomePage)

//GET request to display add-meme screen
/**
 * @swagger
 * /add-meme:
 *  get:
 *   summary: render form to post memes
 *   description: render form to post memes
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/add-meme', viewController.getAddMemePage)

module.exports = router