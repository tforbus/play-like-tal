/**
 * This file is all synchronous and I don't even care.
 * Performance shouldn't matter too much since this just needs to be run one time.
 * Code is cleaner and easier to maintain.
 * No connection refused errors from too many requests at once.
 * #sorryNotSorry
 *
 * call with pgnScraper.scrape(PATH);
 */

var requestSync = require('sync-request'),
    cheerio = require('cheerio'),
    fs = require('fs');

var urlTemplates = {
    pgn: 'http://chessgames.com/perl/nph-chesspgn?text=1&gid=',
    page: 'http://chessgames.com/perl/chess.pl?pid=14380&result=1st&page='
};

var NUMBER_OF_PAGES = 48;
var pgnsToSave = [];

module.exports = {

    /**
     * Creates an array of all page URLs to scrape for game IDs.
     * @return {array} - an array of URLs
     */
    _createPageUrls: function _createPageUrls() {
        var pageUrls = [];
        for(var i = 1; i < NUMBER_OF_PAGES + 1; i+=1) {
            pageUrls.push(urlTemplates.page + i);
        }

        return pageUrls;
    },

    /**
     * Get all the game IDs on a page.
     * @param {string} pageUrl - url of the games list page
     * @return {array} - an array of game IDs (strings)
     */
    _getGameIdsOnPage: function _getGameIdsOnPage(pageUrl) {
        var gameIds = [],
            response = requestSync('GET', pageUrl),
            $ = cheerio.load(response.getBody().toString('utf8')),
            gameLinks = $('a[href*="?gid"]');

        gameLinks.each(function () {
            var matches = $(this).attr('href').match(/(?!gid=)\d+/);
            if (matches.length) {
                gameIds.push(matches[0]);
            }
        });

        return gameIds;
    },

    /**
     * For a given game ID, get the PGN content for it.
     *
     * @param {string} id - game id
     * @return {string}
     */
    _getPgnForGame: function _getPgnForGame(id) {
        var pgnUrl = urlTemplates.pgn + id,
            response = requestSync('GET', pgnUrl),
            pgn = response.getBody().toString('utf8');

        return pgn;
    },

    /**
     * Go through one iteration of getting PGNs from a page URL.
     * Not doing these sequentially was causing some connection refused errors.
     * Since this only needs to be run once really, it doesn't matter to me that it's slow.
     *
     * @param {string} pageUrl - the page to scrape
     * @return {array} - array of pgn strings.
     */
    _pushPgnContents: function _pushPgnContents(pageUrl) {
        var gameIds = this._getGameIdsOnPage(pageUrl),
            pgns = [];

        gameIds.forEach(function (id) {
           var pgn = this._getPgnForGame(id);
           pgns.push(pgn);
        }.bind(this));

        return pgns;
    },

    /**
     * @param {string} path - the place to write the file
     */
    scrape: function scrape(path) {
        var pageUrls = this._createPageUrls(),
            numberOfPgnsSeen = 0,
            data = '';

        pageUrls.forEach(function (pUrl, index) {
            var pgns = this._pushPgnContents(pUrl);
            numberOfPgnsSeen += pgns.length;
            data += pgns.join('\n');
            console.log('pgnScraper:: finished page ' + index + 1);
            console.log('pgnScraper:: pgns seen ' + numberOfPgnsSeen);
        }.bind(this));

        fs.writeFileSync(path, data);
        console.log('pgnScraper:: wrote ' + numberOfPgnsSeen + ' PGNS');
    }
};
