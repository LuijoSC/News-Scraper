var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

//Setting up the port to designated by host, or 3000
var PORT = process.env.PORT || 3000;

//Start Express App
var app = express();

//Setting up the Express Router
var router = express.Router();

//Setting public folder as a static directory
app.use(express.static(__dirname + "/public"));

//Linking handlebars to the Express App
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Setting body parser
app.use(bodyParser.urlencoded({
    extended: false
}));

//Set every request going through middleware
app.use(router);

//Listen on designated PORT
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT)
});