const PageController = require('../controllers/PageController');

const express = require('express');
const router = express.Router();

const pageController = new PageController();

// pages.index
router.get('/', pageController.indexAction);
// pages.create
router.get('/create', pageController.createAction);
// pages.show
router.get('/:id', pageController.showAction);
// pages.store
router.post('/', pageController.storeAction);

module.exports = router;