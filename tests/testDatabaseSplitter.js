(function () {
    var should = require('should');
    var splitter = require('../helpers/databaseSplitter.js');

    var MOCK_DATABASE_PATH = 'mocks/database.pgn';

    describe('Database Splitter', function () {
        
        describe('regular expressions', function () {
            var reg = splitter.re.pgnFirstLine;
            describe('pgnFirstLine', function () {
                it('should match a well formated event line', function () {
                    var string = '[Event "Championship"]';

                    reg.test(string).should.equal(true);
                });

                it('should not match a line without double quotes', function () {
                    var string = '[Event \'Championship\']';
                    reg.test(string).should.equal(false);
                });

                it('should not match a line without a capitalized event tag', function () {
                    var string = '[event "Championship"]';
                    reg.test(string).should.equal(false);
                });
            });
        });

        describe('#readDatabase()', function () {
            it('should read a well formed database', function () {
                splitter.readDatabase(MOCK_DATABASE_PATH)
                .then(function (data) {
                    data.should.not.be(null);
                });
            });

            it('should not read a database that does not exist', function () {
                splitter.readDatabase('aw hell naw')
                .catch(function (err) {
                    err.should.not.be(null);
                });
            });
        });

        describe('#splitDatabase()', function () {
            it('should have 4 games in the database', function () {
                splitter.readDatabase(MOCK_DATABASE_PATH)
                .then(function (data) {
                    return splitter.splitDatabase(data);
                })
                .then(function (games) {
                    games.length.should.be(4);
                });
            });
        });

    });
}());
