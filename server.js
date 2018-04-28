// Modules
const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');

// Routes
const homeRoutes = require('./routes/home');
const pagesRoutes = require('./routes/pages');
const animalsRoutes = require('./routes/animals');

const app = express();

// Configs
nunjucks.configure("views", {
	autoescape: true,
	express: app
});





app.use(bodyParser.urlencoded({extended: true}));

// Define our all routes
app.use('/', homeRoutes);
app.use('/pages', pagesRoutes);
app.use('/animals', animalsRoutes);

app.use(function(request, response, next){
	response.setHeader("Content-Type", "text/plain");
	response.status(404).send("Page introuvable !");
});






app.listen(8080);