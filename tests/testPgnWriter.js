(function () {
    var should = require('should'),
        Q = require('q'),
        fs = require('fs');

    var splitter = require('../helpers/databaseSplitter.js'),
        pgnConverter = require('../helpers/rawPgnConverter.js'),
        pgnWriter = require('../helpers/pgnWriter.js'),
        fileUtils = require('./testUtils/file.js');

    var MOCK_DATABASE_PATH = __dirname + '/mocks/database.pgn',
        pgns = [];

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
                console.error(err);
                err.should.equal(null);
                done();
            });
        });

        describe('#getWinningGames()', function () {
            it('should show only winning games', function () {
                var winning = pgnWriter._getWinningGames(pgns);
                winning.length.should.equal(2);
            });
        });

        describe('#createGameFileName()', function () {
            it('should add .js to a number', function () {
                var fileName = pgnWriter._createGameFileName(1);
                fileName.should.equal('1.js');
            });
        });

        describe('#savePgnObject()', function () {
            it('should save', function (done) {
                var pgn = pgns[0],
                    path = __dirname + '/tmp/___test.js';

                pgnWriter._savePgnObject(path, pgn)
                .then(function (data) {
                    return fileUtils.doesFileExist(path);
                })
                .then(function (exists) {
                    exists.should.equal(true);
                    return fileUtils.removeFile(path);
                })
                .then(function (didRemove) {
                    didRemove.should.equal(true);
                    done();
                })
                .catch(function (error) {
                    console.error(error);
                    error.should.be(null);
                    done();
                });
            });
        });

        describe('#saveWinningGames()', function () {
            it('should save the files', function (done) {
                var path = __dirname + '/tmp';

                pgnWriter.saveWinningGames(path, pgns)
                .then(function () {
                    return fileUtils.doesFileExist(path + '/1.js');
                })
                .then(function (exists) {
                    exists.should.equal(true);
                    return fileUtils.doesFileExist(path + '/2.js');
                })
                .then(function (exists) {
                    exists.should.equal(true);
                })
                .then(function () {
                    return fileUtils.removeFile(path + '/1.js');
                })
                .then(function () {
                    return fileUtils.removeFile(path + '/2.js');
                })
                .then(function () { done(); })
                .catch(function (err) {
                    console.error(err);
                    err.should.equal(null);
                    done();
                });
            });
        });
    });
}());
