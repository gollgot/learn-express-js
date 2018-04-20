class PageController {

    indexAction(req, res){
        let pages = [
            {name : "Accueil ", id: 1},
            {name : "Articles ", id: 2},
            {name : "Galeries ", id: 3}
        ];

        res.render("pages/index.html", {
            pages: pages
        });
    }

    createAction(req, res){

        res.render("pages/create.html", {});
    }

    showAction(req, res){
        res.render("pages/show.html", {
            pageId: req.params.id
        });
    }

    storeAction(req, res){
        console.log(req.body.pageName);
        res.redirect('/pages');
    }

}

module.exports = PageController;