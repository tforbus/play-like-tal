/***********************************************************************************
 * This module takes in an array of PGN JSON object games and saves them.
 * Only winning games are saved.
 * 
 * The public method which should be called is #saveWinningGames()
 ***********************************************************************************/
var fs = require('fs'),
    path = require('path'),
    Q = require('q');

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
        return pgns;
        /*
        return pgns.filter(function (game) {
            return game.didTalWin();
        });
        */
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
     * @param {string} dir - to a folder to save the pgns in
     * @param {array} pgns
     */
    saveWinningGames: function saveWinningGames(dir, pgns) {
        var games = this._getWinningGames(pgns),
            filepath,
            filename;

        return games.reduce(function (promise, current, index) {
            return promise.then(function () {
                filename = this._createGameFileName(index + 1);
                filepath = path.normalize(path.join(dir, filename));
                return this._savePgnObject(filepath, current);
            }.bind(this));
        }.bind(this), Q.when(true));
    }
};
