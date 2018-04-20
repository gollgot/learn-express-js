const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/home');
const pagesRoutes = require('./routes/pages');

const app = express();

nunjucks.configure("views", {
	autoescape: true,
	express: app
});


app.use(bodyParser.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/pages', pagesRoutes);

app.use(function(request, response, next){
	response.setHeader("Content-Type", "text/plain");
	response.status(404).send("Page introuvable !");
});



app.listen(8080);