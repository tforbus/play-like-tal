/***********************************************************************************
 * This module takes in an array of PGN JSON object games and saves them.
 * Only winning games are saved.
 * 
 * The public method which should be called is #saveWinningGames()
 ***********************************************************************************/
var fs = require('fs'),
    Q = require('q'),
    Bagpipe = require('bagpipe');

module.exports = {
    /**
     * Create a filename for a supplied PGN.
     * @param {object} pgn
     */
    _createGameFileName: function _createGameFileName(index) {
        return index + '.js';
    },

    /**
     * Get only winning games from the PGNs supplied.
     * @param {array} pgns
     * @return {array}
     */
    _getWinningGames: function _getWinningGames(pgns) {
        return pgns.filter(function (game) {
            return game.didTalWin();
        });
    },

    /**
     * Save a PGN object to a JavaScript file, and assign a game ID to the object.
     * @param {string} filename - the complete filepath to save.
     * @param {object} pgnJson - a json representation of a PGN file.
     * @return {promise}
     */
    _savePgnObject: function _savePgnObject(filename, pgnJson) {
        var deferred = Q.defer(),
            file = JSON.stringify(pgnJson);

        fs.writeFile(filename, file, function (error) {
            if (error) {
                deferred.reject(new Error(error));
            } else {
                deferred.resolve(file);
            }
        });

        return deferred.promise;
    },

    /**
     * OS X has an issue where more than 245 files can't be opened in parallel.
     * Batch the games into arrays of 244 to be written at once to get around.
     * 
     * @param {array} games - list of games
     * @return {array} array of arrays
     */
    _batchGames: function _batchGames(games, batchSize) {
        var batches = [];
        batchSize = batchSize || 244;

        if (games.length < batchSize) {
            batchSize = games.length;
        }

        for (var i = 0, len = games.length; i < len; i+=batchSize) {
            var temp = games.slice(i, i + batchSize);
            batches.push(temp);
        }
        return batches;
    },

    /**
     * Save all winning games to the games database.
     *
     * OS X has an issue with writing many files at once, so sequentially
     * do the promises.
     * @param {string} path to a folder to save the pgns in
     * @param {array} pgns
     */
    saveWinningGames: function saveWinningGames(path, pgns) {
        var games = this._getWinningGames(pgns),
            batches = this._batchGames(games),
            promises = [],
            deferred = Q.defer(),
            counter = 1;

        var chain = games.reduce(function (promise, current, index) {
            var filename = path + '/' + this._createGameFileName(index + 1);
            return promise.then(function () {
                return this._savePgnObject(filename, current);
            }.bind(this));
        }.bind(this), Q.when(true));

        return chain;
    }
};
