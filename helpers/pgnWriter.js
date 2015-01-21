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
        var filepath,
            filename,
            id;

        return pgns.reduce(function (promise, current, index) {
            return promise.then(function () {
                if (current.id) {
                    id = current.id;
                } else {
                    id = index + 1;
                }
                filename = this._createGameFileName(id);
                filepath = path.normalize(path.join(dir, filename));
                return this._savePgnObject(filepath, current);
            }.bind(this));
        }.bind(this), Q.when(true));
    }
};
