var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

// pages.index
router.get('/', function(req, res) {
	let pages = [
		{name : "Accueil ", id: 1},
		{name : "Articles ", id: 2},
		{name : "Galeries ", id: 3}
	];

  	res.render("pages/index.html", {
  		pages: pages
  	});
});

// pages.create
router.get('/create', function(req, res) {
  	res.render("pages/create.html", {});
});

// pages.show
router.get('/:id', function(req, res) {
  	res.render("pages/show.html", {
		pageId: req.params.id
	});
});

// pages.store
router.post('/', function(req, res) {
  	console.log(req.body.pageName);
  	res.redirect('/pages');
});
module.exports = router;