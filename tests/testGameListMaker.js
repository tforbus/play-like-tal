(function () {
    var should = require('should'),
        os = require('os'),
        path = require('path');

    var gameListMaker = require('../helpers/gameListMaker.js'),
        fileUtils = require('./testUtils/file.js');

    var MOCK_GAMES_PATH = path.join(__dirname, 'mocks'),
        WRITE_DIRECTORY = os.tmpdir();

    describe('Game List Maker', function () {

        describe('#isGameFile()', function () {
            it('should return true for a game file', function () {
                var result = gameListMaker._isGameFile('1.js');
                result.should.equal(true);
            });

            it('should return false for an invalid file', function () {
                var result = gameListMaker._isGameFile('all.js');
                result.should.equal(false);
            });
        });

        describe('#gameIdFromFilename()', function () {
            it('should return 1 for 1.js', function () {
                var num = gameListMaker._gameIdFromFilename('1.js');
                num.should.equal(1);
            });
        });

        describe('#getAllFilenames()', function () {
            it('should get game files from the directory', function () {
                gameListMaker._getAllFilenames(MOCK_GAMES_PATH)
                .then(function (gameFiles) {
                    gameFiles.length.should.equal(2);
                })
                .catch(function (err) {
                    console.error(err);
                    err.should.equal(null);
                });
            });
        });

        describe('#openGame()', function () {
            it('should open game 1', function () {
                gameListMaker._openGame(MOCK_GAMES_PATH, '1.js')
                .then(function (gameObject) {
                    gameObject.event.should.equal('LAT-ch');
                    gameObject.date.should.equal(1952);
                })
                .catch(function (err) {
                    console.error(err);
                    err.should.be(null);
                });
            });
        });

        describe('#openAllGames()', function () {
            it('should open games 1 and 2', function () {
                gameListMaker._openAllGames(MOCK_GAMES_PATH)
                .then(function (allGames) {
                    allGames.length.should.equal(2);
                    allGames[0].site.should.equal('LAT');
                    allGames[1].site.should.equal('Riga');
                })
                .catch(function (err) {
                    console.error(err);
                    err.should.equal(null);
                });
            });
        });

        describe('#constructListItemFromPgn()', function () {
            it('should create list item for 1', function () {
                gameListMaker._openGame(MOCK_GAMES_PATH, '1.js')
                .then(function (pgn) {
                    var info = gameListMaker._constructListItemFromPgn(pgn, 1);
                    info.id.should.equal(1);
                    info.black.should.equal('Tal, Mikhail');
                    info.result.should.equal('0-1');
                })
                .catch(function (err) {
                    console.error(err);
                    err.should.equal(null);
                });
            });
        });

        describe('#constructListItems', function () {
            it('should return a list with 2 games', function () {
                gameListMaker._openAllGames(MOCK_GAMES_PATH)
                .then(function (allGames) {
                    var list = gameListMaker._constructGameList(allGames);
                    list.length.should.equal(2);
                    list[0].id.should.equal(1);
                    list[0].result.should.equal('0-1');
                    list[1].result.should.equal('1-0');
                    list[1].id.should.equal(2);
                })
                .catch(function (err) {
                    console.error(err);
                    err.should.equal(null);
                });
            });
        });

        describe('#writeGamesList()', function () {
            it('should write the file', function (done) {
                var filePath = path.normalize(path.join(WRITE_DIRECTORY, 'list.js'));
                gameListMaker.writeGamesList({
                    readFrom: MOCK_GAMES_PATH,
                    writeTo: filePath
                })
                .then(function (data) {
                    var obj = JSON.parse(data);
                    obj[0].id.should.equal(1);
                })
                .then(function () {
                    return fileUtils.doesFileExist(filePath);
                })
                .then(function (doesExist) {
                    doesExist.should.equal(true);
                })
                .then(function () {
                    return fileUtils.removeFile(filePath);
                })
                .then(function () {
                    return fileUtils.doesFileExist(filePath);
                })
                .then(function (doesExist) {
                    doesExist.should.equal(false);
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
