const AnimalController = require('../controllers/AnimalController');

const express = require('express');
const router = express.Router();

const animalController = new AnimalController();

// pages.index
router.get('/', animalController.indexAction);

module.exports = router;