var fs = require('fs'),
    Q = require('q');

module.exports = {
    /**
     * Create a filename for a supplied PGN.
     * @param {object} pgn
     */
    createGameFileName: function createGameFileName(index) {
        return index + '.js';
    },

    /**
     * Get only winning games from the PGNs supplied.
     * @param {array} pgns
     * @return {array}
     */
    getWinningGames: function getWinningGames(pgns) {
        return pgns.filter(function (game) {
            return game.didTalWin();
        });
    },

    /**
     * Save a PGN object to a JavaScript file, and assign a game ID to the object.
     * @param {object} pgnJson - a json representation of a PGN file.
     * @return {promise}
     */
    savePgnObject: function savePgnObject(filename, pgnJson, index) {
        var deferred = Q.defer(),
            fileName = this.createGameFileName(index),
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
     * @param {array} pgns
     */
    saveWinningGames: function saveWinningGames(pgns) {
        var games = this.getWinningGames(pgns),
            promises = [];

        games.forEach(function (game, index) {
            promises.push(this.savePgnObject(game, index + 1));
        }.bind(this));

        return Q.all(promises);
    }
};
