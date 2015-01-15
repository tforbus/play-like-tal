/***********************************************************************************
 * This module reads all JSON-formatted games (expected format is [number].js)
 * and creates a game list, which is an array containing information about each
 * game.
 *
 * The information retrieved from each game is:
 * ECO, result, player names, game ID (the number of the game)
 *
 * The public method which should be called is #writeGamesList()
 ***********************************************************************************/

var fs = require('fs'),
    path = require('path'),
    Q = require('q');

module.exports = {

    /**
     * Determine if a file is a game file.
     * A game file is in the format [number].js
     * @param {string} fileName
     * @return {boolean}
     */
    _isGameFile: function _isGameFile(fileName) {
        var reFile = /\d+\.js/;
        return reFile.test(fileName);
    },

    /**
     * Construct a game ID from the filename.
     * @param {string} fileName - the fileName [number].js
     * @return {number}
     */
    _gameIdFromFilename: function _gameIdFromFilename(fileName) {
        var parts = fileName.split('.');
        return parseInt(parts[0], 10);
    },

    /**
     * Get all game files from the games database.
     * @param {string} dir
     * @return {promise}
     */
    _getAllFilenames: function _getAllFilenames(dir) {
        var deferred = Q.defer(),
            games;

        fs.readdir(dir, function (err, files) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                games = files.filter(this._isGameFile);
                deferred.resolve(games);
            }
        }.bind(this));

        return deferred.promise;
    },

    /**
     * Open a game name and get the contents as an object.
     * @param {string} dir - the path to the game
     * @param {string} gameName - the filename of the game
     * @return {promise}
     */
    _openGame: function _openGame(dir, gameName) {
        var deferred = Q.defer(),
            filePath = path.normalize(path.join(dir, gameName));

        // OS X has an issue w/ many files open at once.
        // This is a quick fix for that.
        // TODO: make this nicer and async.
        var data = fs.readFileSync(filePath, 'utf-8');
        deferred.resolve(data);

        return deferred.promise;
    },

    /**
     * Open all games from a directory.
     * @param {string} path
     * @return {promise}
     */
    _openAllGames: function _openAllGames(dir) {
        var promises = [];

        return this._getAllFilenames(dir)
        .then(function (files) {
            files.forEach(function (file) {
                var promise = this._openGame(dir, file);
                promises.push(promise);
            }.bind(this));
        }.bind(this))
        .then(function () {
            return Q.all(promises);
        });
    },

    /**
     * Construct a short information object from a PGN js file.
     * @param {object} pgn - json pgn object
     * @param {number} gameId - the id of the game
     * @return {object}
     */
    _constructListItemFromPgn: function _constructListItemFromPgn(pgn, gameId) {
        pgn = JSON.parse(pgn);
        var info = {};

        info.id = gameId;
        info.black = pgn.black;
        info.white = pgn.white;
        info.result = pgn.result.white + '-' + pgn.result.black;
        info.eco = pgn.eco;
        info.event = pgn.event;
        info.round = pgn.round;
        info.date = pgn.date;

        return info;
    },

    /**
     * Construct a game list information object from a list of games.
     * @param {array} games - list of game objects
     * @return {array}
     */
    _constructGameList: function _constructGameList(games) {
        var items = [];
        games.forEach(function (game, index) {
            var id = index + 1,
                info = this._constructListItemFromPgn(game, id);
            items.push(info);
        }.bind(this));

        return items;
    },

    /**
     * Write the games list JSON to file.
     * @param {object} options - hash in format {readFrom, writeTo}
     * @return {promise}
     */
    writeGamesList: function writeGamesList(options) {
        function writeFile(data) {
            var deferred = Q.defer();
            fs.writeFile(options.writeTo, data, function (err) {
                if (err) {
                    deferred.reject(new Error(err));
                } else {
                    deferred.resolve(data);
                }
            });
            return deferred.promise;
        }

        return this._openAllGames(options.readFrom)
        .then(function (allGames) {
            return this._constructGameList(allGames);
        }.bind(this))
        .then(function (gamesList) {
            var data = JSON.stringify(gamesList);
            return writeFile(data);
        })
        .catch(function (err) {
            console.error(err);
        });
    }
};
