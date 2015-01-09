var fs = require('fs');

/**
 * Supplied with a single PGN file, put the PGN into a JSON format that can readily be used
 * on the web.
 * {
 *  event: {String?},
 *  site: {String?},
 *  date: {Date?},
 *  round: {Number?},
 *  white: {String},
 *  black: {String},
 *  result: { white: {String}, black: {String} },
 *  whiteElo: {Number?},
 *  blackElo: {Number?},
 *  eco: {String},
 *  moves: [
 *      { white: {String}, black: {String} }, ...
 *  ]
 * }
 */

// Regular expressions for portions of the PGN.
var re = {
    pgnFirstLine:   /(?=\[Event\s\".*\"\])/, // split here, but keep this information
    newLine:        /(\n|\r)+/gm,
    event:          /\[event/i,
    site:           /\[site/i,
    date:           /\[date/i,
    round:          /\[round/i,
    white:          /\[white(?!\s*elo)/i,
    black:          /\[black(?!\s*elo)/i,
    result:         /\[result/i,
    whiteElo:       /\[whiteelo/i,
    blackElo:       /\[blackelo/i,
    eco:            /\[eco/i,
    moves:          /1\.N?\w{1}\d{1}(?:(?![0|1](?:[-/])).)*/gmi
};

function getTextBetweenQuotes(line) {
    var re = /(?:\")(.*)(?:\")/g,
        matches = re.exec(line);

    if (matches && matches[1]) {
        return matches[1];
    }
}

function constructPgn(string) {
    var pgn = {},
        lines = string.split(re.newLine);

    // Get all the easy-to-grab information.
    lines.forEach(function (line) {
        if (re.event.test(line)) {
            pgn.event = getTextBetweenQuotes(line);
        }

        if (re.site.test(line)) {
            pgn.site = getTextBetweenQuotes(line);
        }

        if (re.date.test(line)) {
            pgn.date = getTextBetweenQuotes(line).substring(0,4);
        }

        if (re.round.test(line)) {
            pgn.round = getTextBetweenQuotes(line);
        }

        if (re.white.test(line)) {
            pgn.white = getTextBetweenQuotes(line);
        }

        if (re.black.test(line)) {
            pgn.black = getTextBetweenQuotes(line);
        }

        if (re.result.test(line)) {
            var result = getTextBetweenQuotes(line);
            pgn.result = {};
            pgn.result.white = result.split('-')[0];
            pgn.result.black = result.split('-')[1];
        }

        if (re.eco.test(line)) {
            pgn.eco = getTextBetweenQuotes(line);
        }
    });
    pgn.moves = [];

    // Put the moves into a single line to make parsing easier.
    // Then extract JUST the moves from the PGN string, and split each move based on the
    // move number.
    var singleLine = string.replace(re.newLine, ' '),
        gamePlay = singleLine.match(re.moves),
        turns = gamePlay[0].trim().split(/\d+\./g);

    // Take each turn by the players and assign the move each one made.
    turns.forEach(function (turn) {
        var movesThisTurn = {
            white: null,
            black: null
        };

        if (!turn.length) { return; }
        var eachMove = turn.split(/\s/);
        movesThisTurn.white = eachMove[0];
        movesThisTurn.black = eachMove[1];

        pgn.moves.push(movesThisTurn);
    });

    return pgn;
}

/**
 * The PGN database is full of PGNs separated by new lines and each
 * begin with [Event "Something"]
 */
function getIndividualPgns(data) {
    var pgns = data.split(re.pgnFirstLine);
    return pgns;
}

function readPgnDatabase(relativeFilePath) {
    if (relativeFilePath.charAt(0) !== '/') {
        relativeFilePath = '/' + relativeFilePath;
    }

    var path = __dirname + relativeFilePath,
        pgnJson = [];

    fs.readFile(path, 'utf8', function (err, data) {
        var allPgns = getIndividualPgns(data);

        allPgns.forEach(function (pgn) {
            var pgnObject = constructPgn(pgn);
            pgnJson.push(pgnObject);
        });

        var string = JSON.stringify(pgnJson, null, 2);
        fs.writeFile(__dirname + '/../database/games.js', string, function (err) {
            if (!err) {
                console.log('wrote database to JSON');
            }
        });

    });
}

module.exports = {
    build: function () { return readPgnDatabase('../database/Tal.pgn'); }
};
