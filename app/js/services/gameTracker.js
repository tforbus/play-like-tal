angular.module('PlayLikeTal.Services')

.service('gameTrackerService', function () {

    // Save the current game.
    var currentGame = {"event":"LAT-ch","site":"LAT","date":1952,"round":null,"white":"Klasup, Karlis","black":"Tal, Mikhail","result":{"white":"0","black":"1"},"eco":"D46","moves":[{"white":"d4","black":"Nf6"},{"white":"c4","black":"e6"},{"white":"Nf3","black":"d5"},{"white":"Nc3","black":"c6"},{"white":"e3","black":"Nbd7"},{"white":"Bd3","black":"Bb4"},{"white":"a3","black":"Ba5"},{"white":"O-O","black":"O-O"},{"white":"Ne5","black":"Nxe5"},{"white":"dxe5","black":"dxc4"},{"white":"Bxc4","black":"Nd7"},{"white":"f4","black":"Qe7"},{"white":"b4","black":"Bb6"},{"white":"Qb3","black":"f6"},{"white":"Bxe6+","black":"Kh8"},{"white":"Ne4","black":"fxe5"},{"white":"Kh1","black":"exf4"},{"white":"exf4","black":"Nf6"},{"white":"Ng5","black":"Ne4"},{"white":"Nf7+","black":"Rxf7"},{"white":"Bxf7","black":"Nf2+"},{"white":"Kg1","black":"Nd3+"},{"white":"Kh1","black":"Qe2"},{"white":"Bb2","black":"Bh3"},{"white":"Bxg7+","black":"Kxg7"},{"white":"Bd5","black":"cxd5"},{"white":"Qxd5","black":"Kh8"},{"white":"Qg5","black":"Bd4"},{"white":"gxh3","black":"Rg8"},{"white":"Rae1","black":"Nxe1"}]};

    // All the turns made in the game.
    var turns = [].concat(currentGame.moves),
        nextTurn,
        nextMove;

    /**
     * Load a game from an endpoint and set it as the current.
     * @param {string} url - the game endpoint.
     * @return {promise}
     */
    this.loadGame = function loadGame(url) {
    };

    /**
     * Get the current game state.
     * @return {object}
     */
    this.getCurrentGame = function getCurrentGame() {
        return currentGame;
    };

    this.getNextTurn = function getNextTurn() {
        nextTurn = turns.shift();
        return nextTurn;
    };

    this.getNextMove = function getNextMove() {
        // Get the algebraic notation for the move.
        var san = '';

        // If a move has never been set, get it.
        if (!nextTurn && turns.length) {
            nextTurn = turns.shift();
        }

        if (nextTurn.white) {
            san = nextTurn.white;
            delete nextTurn.white;
        } else {
            san = nextTurn.black;
            delete nextTurn.black;

            // White and black have moved, increment the turn.
            nextTurn = turns.shift();
        }

        return san;
    };

    this.peekNextMove = function peekNextMove() {
        // Initialize the first move if no move available.
        if (!nextTurn && turns.length) {
            nextTurn = this.getNextTurn();
        }

        if (nextTurn) {
            if (nextTurn.white) {
                return nextTurn.white;
            }
            if (nextTurn.black) {
                return nextTurn.black;
            }
        }

        return null;
    };


    this.isTalWhite = function isTalWhite() {
        return currentGame.white === 'Tal, Mikhail';
    };

    this.isPlayerMove = function isPlayerMove() {
        // If the first move of the game and player is white, player turn.
        if (!nextTurn && this.isTalWhite()) {
            return true;
        }

        var isWhite = this.isTalWhite(),
            whiteHasNotMoved = Boolean(nextTurn.white);

        var isBlack = !isWhite,
            blackHasNotMoved = Boolean(nextTurn.black);

        if (isWhite && whiteHasNotMoved) {
            return true;
        }

        if (isBlack && blackHasNotMoved && !whiteHasNotMoved) {
            return true;
        }
    };

    /**
     * Detect if player made correct move.
     * @param {string} san - algebraic notation for move made.
     * @param {object} turn - the current turn
     */
    this.playerMadeCorrectMove = function playerMadeCorrectMove(san, turn) {
        var turnColor = 'black';
        if (this.isTalWhite()) {
            turnColor = 'white';
        }

        if (turn) {
            return san === turn[turnColor];
        }
    };

});
