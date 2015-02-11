var Pgn = require('./pgn.js').Pgn;

module.exports = {

    // Regular expressions
    re: {
        newLine:        /[\n|\r|\r\n]{1,}/gm,
        eventName:      /\[event(?!\s*date)/i,
        site:           /\[site/i,
        date:           /\[date/i,
        round:          /\[round/i,
        white:          /\[white(?!\s*elo)/i,
        black:          /\[black(?!\s*elo)/i,
        result:         /\[result/i,
        whiteElo:       /\[whiteelo/i,
        blackElo:       /\[blackelo/i,
        eco:            /\[eco/i,
        moves:          /1\.\s?N?\w{1}\d{1}\s?(?:(?![0|1](?:[-/])).)*/gmi
    },

    /**
     * Extract text in double quotes in a single line of text.
     * @param {string} text - the text in question
     * @return {string}
     */
    getTextBetweenDoubleQuotes: function getTextBetweenDoubleQuotes(text) {
        if (/"/.test(text)) {
            return text.match(/"(.*?)"/)[1];
        } else {
            return null;
        }
    },

    /**
     * Split a raw PGN (text) on a line break.
     * @param {string} rawPgn
     * @return {array}
     */
    splitRawPgnIntoLines: function splitRawPgnIntoLines(rawPgn) {
        return rawPgn.split(this.re.newLine).filter(function (line) {
            return line.length;
        });
    },

    /**
     * Chess results are in format 1-0, 0-1, 1/2-1/2 (white's score first)
     * Parse out the white and black score for each.
     * @param {string} resultString
     * @return {string}
     */
    parseResult: function parseResult(resultString) {
        var split = resultString.split('-'),
            whiteScore = split[0],
            blackScore = split[1];

        return {
            white: whiteScore,
            black: blackScore
        };
    },

    /**
     * Get the moves from a raw PGN.
     * The expected return is an array of each pair of moves.
     *
     * example output: ['d4 Nf6', 'c4 e6']
     *
     * @param {string} rawPgn
     * @return {array} turns - an array of moves taken each turn.
     */
    getMoves: function getMoves(rawPgn) {
        // Turn the PGN into a single line for easier parsing,
        // extract the moves string,
        // and split each pair of moves by the number of the move.
        var singleLine = rawPgn.replace(this.re.newLine, ' '),
            gamePlay = singleLine.match(this.re.moves),
            turns;

        // some pgns are not correct.
        gamePlay = gamePlay[0].replace(/(\d{1,2}\.)\s+/g, '$1'); 
        turns = gamePlay.trim().split(/\d{1,2}\.\s*/g);

        // Filter out the empty turn that gets created on split,
        // and trim the turns to prevent any space issues.
        return turns
        .filter(function (turn) {
            return turn.length;
        })
        .map(function (turn) {
            return turn.trim();
        });

    },

    /**
     * Constructs a PGN object from a raw PGN text string.
     * @param {string} rawPgn - a raw pgn
     * @param {number} id - optional, id of the game
     * @return {object}
     */
    constructPgnObject: function constructPgnObject(rawPgn, id) {
        var pgnObject = new Pgn(),
            allLines = this.splitRawPgnIntoLines(rawPgn),
            turns = this.getMoves(rawPgn);

        allLines.forEach(function (line) {
            var quoted = this.getTextBetweenDoubleQuotes(line);

            if (this.re.eventName.test(line)) {
                pgnObject.eventName = quoted;
            }

            else if (this.re.site.test(line)) {
                pgnObject.site = quoted;
            }

            else if (this.re.date.test(line)) {
                // Just grab the year
                pgnObject.date = parseInt(quoted.substring(0, 4), 10);
            }

            else if (this.re.round.test(line)) {
                pgnObject.round = quoted;
            }

            else if (this.re.white.test(line)) {
                pgnObject.white = quoted;
            }

            else if (this.re.black.test(line)) {
                pgnObject.black = quoted;
            }

            else if (this.re.result.test(line)) {
                var scores = this.parseResult(quoted);
                pgnObject.result = scores;
            }

            else if (this.re.eco.test(line)) {
                pgnObject.eco = quoted;
            }
        }.bind(this));

        pgnObject.moves = [];
        turns.forEach(function (turn) {
            // 'd4 Nf6' -> ['d4', 'Nf6']
            var eachMove = turn.split(/\s/);
            pgnObject.moves = pgnObject.moves.concat(eachMove);
        });

        // Assign ID for easy lookup
        if(!isNaN(parseFloat(id))) {
            pgnObject.id = id;
        }

        return pgnObject;
    }
};
