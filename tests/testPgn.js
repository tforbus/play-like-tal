(function () {
    var should = require('should'),
        fs = require('fs');

    var Pgn = require('../helpers/pgn.js').Pgn,
        pgnConverter = require('../helpers/rawPgnConverter.js');

    var MOCK_PGN_PATH = 'mocks/pgn.pgn';
    var PGN = new Pgn();

    describe('PGN Class', function () {

        before('create a PGN object', function (done) {
            fs.readFile(__dirname + '/' + MOCK_PGN_PATH, 'utf-8', function (err, data) {
                PGN = pgnConverter.constructPgnObject(data);
                done();
            });
        });

        it('should show that tal won', function () {
            var didWin = PGN.didTalWin();
            didWin.should.equal(true);
        });
    });
}());
