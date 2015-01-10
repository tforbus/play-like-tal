var fs = require('fs'),
    Q = require('q');

module.exports = {
    doesFileExist: function doesFileExist(path) {
        var deferred = Q.defer();
        fs.exists(path, function (exists) {
            deferred.resolve(exists);
        });

        return deferred.promise;
    },

    removeFile: function removeFile(path) {
        var deferred = Q.defer();
        fs.unlink(path, function (err) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(true);
            }
        });

        return deferred.promise;
    },

    writeFile: function writeFile(path, data) {
        var deferred = Q.defer();
        fs.writeFile(path, data, function (err) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(data);
            }
        });

        return deferred.promise;
    }
};
