var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

// pages.index
router.get('/', function(req, res) {
  	res.render("home/index.html", {});
});

module.exports = router;