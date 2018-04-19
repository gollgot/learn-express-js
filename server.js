var express = require("express");
var nunjucks = require("nunjucks");
var bodyParser = require('body-parser');
var homeController = require('./controllers/homeController');
var pagesController = require('./controllers/pagesController');

var app = express();

nunjucks.configure("views", {
	autoescape: true,
	express: app
});



app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));

app.use('/', homeController);
app.use('/pages', pagesController);

app.use(function(request, response, next){
	response.setHeader("Content-Type", "text/plain");
	response.status(404).send("Page introuvable !");
});



app.listen(8080);