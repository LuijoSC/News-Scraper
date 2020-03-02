//Require request and cheerio to scrap
var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
    request("https://www.xataka.com.mx/", function(err, res, body){
    var $ = cheerio.load(body);
    var articles = [];
    $('h2[class="abstract-title"]').each(function(i,element){
        var headline = $(element).$(element).children("a").map(function(){
            return $(this).text().trim();
        });
        var summary = $(element).attr('span', 'ultima-hora-summary').map(function(){
            return $(this).text().trim();
        });

        console.log(headline);
        // console.log(summary);

        if (headline && summary){

            var dataToAdd = {
                headline: headline,
                summary: summary
            };
            articles.push(dataToAdd);
            }   
        });
        cb(articles);
    });
};

module.exports = scrape;