//Require request and cheerio to scrap
var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {
    request("https://www.excelsior.com.mx/ultima-hora", function(err, res, body){
    var $ = cheerio.load(body);
    var articles = [];
    $('div[class="widget-content2 ultima-hora-content-wrapper"]').each(function(i,element){
        var headline = $(element).attr('span', 'dblock ultima-hora-title').map(function(){
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