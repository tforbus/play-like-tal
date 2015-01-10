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
     * Save all winning games to the games database.
     *
     * OS X has an issue with writing many files at once, so sequentially
     * do the promises.
     * @param {string} path to a folder to save the pgns in
     * @param {array} pgns
     */
    saveWinningGames: function saveWinningGames(path, pgns) {
        var games = this._getWinningGames(pgns),
            chain;

        chain = games.reduce(function (promise, current, index) {
            var filename = path + '/' + this._createGameFileName(index + 1);
            return promise.then(function () {
                return this._savePgnObject(filename, current);
            }.bind(this));
        }.bind(this), Q.when(true));

        return chain;
    }
};
