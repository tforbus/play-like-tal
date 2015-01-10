(function () {
    var should = require('should'),
        Q = require('q'),
        fs = require('fs');

    var splitter = require('../helpers/databaseSplitter.js'),
        pgnConverter = require('../helpers/rawPgnConverter.js'),
        pgnWriter = require('../helpers/pgnWriter.js');

    var MOCK_DATABASE_PATH = __dirname + '/mocks/database.pgn',
        pgns = [];

    // Check if a file exists.
    function checkFileExists(path) {
        var deferred = Q.defer();
        fs.exists(path, function (exists) {
            deferred.resolve(exists);
        });

        return deferred.promise;
    }

    function removeFile(path) {
        var deferred = Q.defer();
        fs.unlink(path, function (err) {
            if (err) { deferred.reject(new Error(err)); }
            deferred.resolve(true);
        });

        return deferred.promise;
    }

    describe('PGN Writer', function () {
        before(function (done) {
            splitter.readDatabase(MOCK_DATABASE_PATH)
            .then(function (data) {
                return splitter.splitDatabase(data);
            })
            .then(function (games) {
                games.length.should.equal(4);
                
                games.forEach(function (game) {
                    pgns.push(pgnConverter.constructPgnObject(game));
                });

                pgns.length.should.equal(4);
                done();
            })
            .catch(function (err) {
                console.log(err);
                done();
            });
        });

        describe('#getWinningGames()', function () {
            it('should show only winning games', function () {
                var winning = pgnWriter.getWinningGames(pgns);
                winning.length.should.equal(2);
            });
        });

        describe('#createGameFileName', function () {
            it('should add .js to a number', function () {
                var fileName = pgnWriter.createGameFileName(1);
                fileName.should.equal('1.js');
            });
        });

        describe('#savePgnObject', function () {
            it('should save', function (done) {
                var pgn = pgns[0],
                    path = __dirname + '/../database/games/___test.js';
                pgnWriter.savePgnObject(pgn, '___test')
                .then(function (data) {
                    console.log(path);
                    return checkFileExists(path);
                })
                .then(function (exists) {
                    exists.should.equal(true);
                    return removeFile(path);
                })
                .then(function (didRemove) {
                    didRemove.should.equal(true);
                    done();
                })
                .catch(function (error) {
                    console.error(error);
                    error.should.not.be(null);
                    done();
                });
            });
        });

    });
}());
