(function () {
    var should = require('should'),
        path = require('path'),
        fs = require('fs');
    var pgnConverter = require('../helpers/rawPgnConverter.js');

    var MOCK_PGN_PATH = path.join(__dirname, 'mocks', 'pgn.pgn');

    describe('Raw PGN Converter', function () {

        describe('regular expressions', function () {
            var regExps = pgnConverter.re;

            describe('newLine', function () {
                var re = regExps.newLine;
                it('should detect new lines and carriage returns', function () {
                    var string = 'hello\nthere\rnerds';
                    re.test(string).should.equal(true);
                });

                it('should not match a line with no line breaks', function () {
                    var string = 'hello there nerds';
                    re.test(string).should.equal(false);
                });
            });

            describe('event', function () {
                var re = regExps.event;
                it('should match a well formed event line', function () {
                    var string = '[Event "Championship"]';
                    re.test(string).should.equal(true);
                });
            });

            describe('site', function () {
                var re = regExps.site;
                it('should match a well formed site line', function () {
                    var string = '[Site "Riga"]';
                    re.test(string).should.equal(true);
                });
            });

            describe('date', function () {
                var re = regExps.date;
                it('should match a well formed date line', function () {
                    var string = '[Date "1950.??.??"]';
                    re.test(string).should.equal(true);
                });
            });

            describe('round', function () {
                var re = regExps.round;
                it('should match a well formed round line', function () {
                    var string = '[Round "1"]';
                    re.test(string).should.equal(true);
                });
            });

            describe('white', function () {
                var re = regExps.white;
                it('should match a well formed white line', function () {
                    re.test('[White "Player 1"]').should.equal(true);
                });

                it('should not match a line that contains elo', function () {
                    re.test('[White Elo "2800"]').should.equal(false);
                    re.test('[WhiteElo "2800"]').should.equal(false);
                });
            });

            describe('black', function () {
                var re = regExps.black;
                it('should match a well formed black line', function () {
                    re.test('[Black "Player 2"]').should.equal(true);
                });

                it('should not match a line that contains elo', function () {
                    re.test('[Black Elo "2800"]').should.equal(false);
                    re.test('[BlackElo "2800"]').should.equal(false);
                });
            });

            describe('result', function () {
                var re = regExps.result;
                it('should match a well formed result line', function () {
                    re.test('[Result "0-1"]').should.equal(true);
                });
            });

            describe('whiteElo', function () {
                var re = regExps.whiteElo;
                it('should match a well formed whiteelo line', function () {
                    re.test('[WhiteElo "2800"]').should.equal(true);
                });

                it('should not match a line that just contains white', function () {
                    re.test('[White "Tal, Mikhail"]').should.equal(false);
                });
            });

            describe('blackElo', function () {
                var re = regExps.blackElo;
                it('should match a well formed blackelo line', function () {
                    re.test('[BlackElo "2800"]').should.equal(true);
                });

                it('should not match a line that just contains black', function () {
                    re.test('[Black "Tal, Mikhail"]').should.equal(false);
                });
            });

            describe('eco', function () {
                var re = regExps.eco;
                it('should match a well formed eco line', function () {
                    re.test('[ECO "A00"]').should.equal(true);
                });
            });

            describe('moves', function () {
                var re = regExps.moves;
                it('should find a valid sequence of moves', function () {
                    re.test('1.e4 e5').should.equal(true);
                });

                it('should not match an invalid first move', function () {
                    re.test('1.Qd2').should.equal(false);
                });
            });
        });

        describe('#getTextBetweenDoubleQuotes()', function () {
            it('should extract text between double quotes', function () {
                var result = pgnConverter.getTextBetweenDoubleQuotes('Hello, "World"');
                result.should.equal('World');
            });
        });

        describe('#splitRawPgnIntoLines()', function () {
            it('should split the pgn into the correct number of lines', function (done) {
                fs.readFile(MOCK_PGN_PATH, 'utf-8', function (err, data) {
                    if (err) {
                        err.should.not.equal(null);
                        done();
                    } else {
                        var lines = pgnConverter.splitRawPgnIntoLines(data);
                        lines.length.should.equal(15);
                        done();
                    }
                });
            });
        });

        describe('#parseResult()', function () {
            it('should parse a 0-1', function () {
                var scores = pgnConverter.parseResult('0-1');
                scores.white.should.equal('0');
                scores.black.should.equal('1');
            });

            it('should parse a 1-0', function () {
                var scores = pgnConverter.parseResult('1-0');
                scores.white.should.equal('1');
                scores.black.should.equal('0');
            });

            it('should parse a 1/2-1/2', function () {
                var scores = pgnConverter.parseResult('1/2-1/2');
                scores.white.should.equal('1/2');
                scores.black.should.equal('1/2');
            });
        });

        describe('#getMoves()', function () {
            it('should parse the moves of the pgn', function (done) {
                fs.readFile(MOCK_PGN_PATH, 'utf-8', function (err, data) {
                    if (err) {
                        err.should.not.equal(null);
                        done();
                    } else {
                        var turns = pgnConverter.getMoves(data);
                        turns.length.should.equal(30);
                        turns[0].should.equal('d4 Nf6');
                        turns[29].should.equal('Rae1 Nxe1');
                        done();
                    }
                });
            });
        });

        describe('#constructPgnObject()', function () {
            it('should construct a proper pgn object', function (done) {
                fs.readFile(MOCK_PGN_PATH, 'utf-8', function (err, data) {
                    if (err) {
                        err.should.not.equal(null);
                        done();
                    } else {
                        var pgn = pgnConverter.constructPgnObject(data);
                        pgn.event.should.equal('LAT-ch');
                        pgn.site.should.equal('LAT');
                        pgn.date.should.equal(1952);
                        pgn.round.should.equal('?');
                        pgn.white.should.equal('Klasup, Karlis');
                        pgn.black.should.equal('Tal, Mikhail');
                        pgn.result.white.should.equal('0');
                        pgn.result.black.should.equal('1');
                        pgn.eco.should.equal('D46');
                        pgn.moves.length.should.equal(30);
                        pgn.moves[4].white.should.equal('e3');
                        pgn.moves[4].black.should.equal('Nbd7');
                        done();
                    }
                });
            });
        });
    });
}());
