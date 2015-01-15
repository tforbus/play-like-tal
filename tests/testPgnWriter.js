(function () {
    var should = require('should'),
        Q = require('q'),
        fs = require('fs'),
        os = require('os'),
        path = require('path');

    var splitter = require('../helpers/databaseSplitter.js'),
        pgnConverter = require('../helpers/rawPgnConverter.js'),
        pgnWriter = require('../helpers/pgnWriter.js'),
        fileUtils = require('./testUtils/file.js');

    var MOCK_DATABASE_PATH = path.join(__dirname, 'mocks', 'database.pgn'),
        WRITE_DIRECTORY = os.tmpdir(),
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

        describe('#createGameFileName()', function () {
            it('should add .js to a number', function () {
                var fileName = pgnWriter._createGameFileName(1);
                fileName.should.equal('1.js');
            });
        });

        describe('#savePgnObject()', function () {
            it('should save', function (done) {
                var pgn = pgns[0],
                    filepath = path.normalize(path.join(WRITE_DIRECTORY, '___test.js'));

                pgnWriter._savePgnObject(filepath, pgn)
                .then(function (data) {
                    return fileUtils.doesFileExist(filepath);
                })
                .then(function (exists) {
                    exists.should.equal(true);
                    return fileUtils.removeFile(filepath);
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
                var file1 = path.join(WRITE_DIRECTORY, '1.js'),
                    file2 = path.join(WRITE_DIRECTORY, '2.js');

                pgnWriter.saveWinningGames(WRITE_DIRECTORY, pgns)
                .then(function () {
                    return fileUtils.doesFileExist(file1);
                })
                .then(function (exists) {
                    exists.should.equal(true);
                    return fileUtils.doesFileExist(file2);
                })
                .then(function (exists) {
                    exists.should.equal(true);
                    done();
                })
                .catch(function (err) {
                    console.error(err);
                    err.should.equal(null);
                    done();
                });
            });
        });
    });
}());
