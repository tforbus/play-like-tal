/**
 * Just run this file once to scrape and get all the openings in JSON format.
 *
 * Run with node eco
 */
var cheerio = require('cheerio'),
    request = require('request'),
    fs = require('fs');

// Just want to scrape the ECO codes and names.
var URL = 'http://chessgames.com/chessecohelp.html',
    PATH = '';

var output;

function initializeScrape() {
    request(URL, doScrape);
}

function doScrape(error, response, html) {
    if (error) {
        console.error(error);
        return;
    }

    var $ = cheerio.load(html),
        lookupJson = {},
        openings = $('tr');

    openings.each(function (index, row) {
        var info = $(this).children('td'),
            code = info.first().text(),
            name = info.last().find('b').text(),
            moves = info.last().find('font').text();

        lookupJson[code] = {};
        lookupJson[code].name = name;
        lookupJson[code].moves = moves.split(/\n/)[1];
    });

    makeOutput(lookupJson);
}

function makeOutput(map) {
    var string = JSON.stringify(map, null, 2);
    fs.writeFile(__dirname + '/../database/eco.js', string, function (err) {
        if (err) {
            console.error(err);
            return;
        }

        console.log('file saved');
    });
}

module.exports = {
    scrape: initializeScrape
};
