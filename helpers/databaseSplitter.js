var fs = require('fs'),
    Q = require('q');

module.exports = {

    // Collection of regular expressions used in this file.
    re: {
        pgnFirstLine: /(?=\[Event\s\".*\"\])/
    },

    /**
     * Reads a games database and outputs the contents wrapped in a promise.
     * @param {string} databasePath - the relative path to the games database
     * @return {promise}
     */
    readDatabase: function readDatabase(databasePath) {
        var deferred = Q.defer(),
            path;

        if (databasePath.charAt(0) !== '/') {
            databasePath = '/' + databasePath;
        }

        path = __dirname + databasePath;

        fs.readFile(databasePath, 'utf-8', function (error, data) {
            if (error) {
                deferred.reject(new Error(error));
            } else {
                deferred.resolve(data);
            }
        });

        return deferred.promise;
        
    },

    /**
     * Supplied with database contents, split the database into multiple PGNs ( raw text) 
     * @param {string} data - the database contents
     * @return {promise}
     */
    splitDatabase: function splitDatabase(data) {
        var deferred = Q.defer(),
            pgns;

        pgns = data.split(re.pgnFirstLine);
        deferred.resolve(pgns);

        return deferred.promise;
    }
};
