var express = require('express');
var router = express.Router();
var db = require('../queries');





/**
 * @swagger
 * /api/puppies:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */

router.get('/getAllProcess');
router.get('/api/puppies /: id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies /: id', db.updatePuppy);
router.delete('/api/puppies /: id', db.removePuppy);

// application -------------------------------------------------------------
router.get('/', function(req, res) {

    res.render('index', { title: 'node - postgres - promises' }); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;