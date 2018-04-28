var client = require("../connection");

class AnimalController {

    indexAction(req, res){

    	client.search({
			index: 'zoo',
			type: 'animals',
			body: {
				query: {
					"match_all":{}
				}
			}
		}, function(error, response, status){
			if(!error){
				var hits = response.hits.hits;
				console.log("debug : "+JSON.stringify(hits));

				res.render("animals/index.html", {
					total: response.hits.total,
		            animals: hits
		        });
			}
		});
		
    }

}

module.exports = AnimalController;