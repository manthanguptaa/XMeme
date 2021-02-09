//3rd party libraries
const express = require('express')
const cors = require('cors')

//importing files
const memeController = require('../controllers/memeController')

/**
 * @swagger
 * definitions:
 *  Meme:
 *   type: object
 *   properties:
 *     name:
 *      type: string
 *      description: Name of the author of the meme
 *      example: 'Manthan Gupta'
 *     url:
 *      type: string
 *      description: URL of meme image
 *      example: 'https://static.mommypoppins.com/styles/image620x420/s3/school_meme_3_0.jpg'
 *     caption:
 *      type: string
 *      description: Caption for the meme
 *      example: 'This is a meme'
 *     upload_time:
 *      type: Date
 *      description: Time at which the meme was uploaded by the user
 *      example: ''
 */

const router = express.Router()

//GET request /memes to display all the memes
/**
 * @swagger
 * /memes:
 *  get:
 *   summary: get all memes
 *   description: get all memes
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/', cors(), memeController.getAllMemes)

//GET request /memes/id to display all the memes with id
/**
 * @swagger
 * /memes/{meme_id}:
 *  get:
 *   summary: get meme with meme_id id
 *   description: get meme with meme_id id
 *   parameters:
 *    - in: path
 *      name: meme_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the meme
 *      example: 1
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.get('/:id', cors(), memeController.getMemeById)

//POST request /memes to save new meme in database
/**
  * @swagger
  * /memes:
  *  post:
  *   summary: create meme
  *   description: create meme 
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Meme'
  *   responses:
  *    200:
  *     description: meme created succesfully
  *    400:
  *     description: URL entered in not valid
  *    409:
  *     description: Duplicate POST request
  *    500:
  *     description: failure in creating meme
  */
router.post('/', memeController.postMeme)

// POST request /memes/redirect to save a new meme in database and redirect to homepage
/**
  * @swagger
  * /memes/redirect:
  *  post:
  *   summary: create meme and redirect to homepage
  *   description: create meme and redirect to homepage
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Meme'
  *   responses:
  *    200:
  *     description: meme created succesfully
  *    409:
  *     description: Duplicate POST request
  *    500:
  *     description: failure in creating meme
  */
router.post('/redirect', memeController.redirectPost)

//PATCH request /memes/id to update meme content in the database
/**
 * @swagger
 * /memes/{meme_id}:
 *  patch:
 *   summary: update meme details
 *   description: update meme details
 *   parameters:
 *    - in: path
 *      name: meme_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the meme
 *      example: 1
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
router.patch('/:id', memeController.updateMeme)

//DELETE request /memes/id to delete meme in the database
/**
 * @swagger
 * /memes/{meme_id}:
 *  delete:
 *   summary: delete a meme
 *   description: delete a meme
 *   parameters:
 *    - in: path
 *      name: meme_id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the meme
 *      example: 1
 *   responses:
 *    304:
 *     description: redirected to homepage
 *    500:
 *     description: error
 */
router.delete('/:id', memeController.deleteMeme)

module.exports = router