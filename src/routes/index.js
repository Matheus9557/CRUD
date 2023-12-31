const express = require('express');
const router = express.Router();
const foodsController = require('../controllers/foodsController');

router.get('/', (req, res) => res.redirect('/foods/index'));

router.get('/foods/index', foodsController.index);


module.exports = router;
