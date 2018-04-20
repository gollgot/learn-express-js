const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

// pages.index
router.get('/', function(req, res) {
  	res.render("home/index.html", {});
});

module.exports = router;