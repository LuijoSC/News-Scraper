module.exports = function(router) {
    //Route to render homepage
    router.get("/", function(req, res){
        res.render("home");
    });
    //Route to render saved page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
}