angular.module('PlayLikeTal.Services')

// to give a hint, we know that the move is Nf6, e.g.
// look through each square of the board and find the square that has f6 listed
// as a legal move.
// logic.moves({square: ''})
// logic.get(square) returns piece on the square.
.service('gameTrackerService', function () {

    // Save the current game.
    var currentGame ={"event":"?","site":"Riga","date":1949,"round":"?","white":"Mikhail Tal","black":"Leonov","result":{"white":"1","black":"0"},"eco":"B13","moves":[["e4","c6"],["d4","d5"],["exd5","cxd5"],["Bd3","Nf6"],["h3","h6"],["Bf4","e6"],["Nf3","Bd6"],["Bxd6","Qxd6"],["c3","Nc6"],["O-O","O-O"],["Qe2","Re8"],["Ne5","Qc7"],["f4","Nxe5"],["fxe5","Nh7"],["Qh5","Re7"],["Na3","a6"],["Nc2","Qd7"],["Ne3","Qe8"],["Rf6","Qf8"],["Rf4","Bd7"],["Ng4","Be8"],["Nf6+","Nxf6"],["exf6","Rc7"],["fxg7","Kxg7"],["Qe5+"]]};

    var turns,
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

    this.setCurrentGame = function setCurrentGame(game) {
        currentGame = game;
        turns = [].concat(game.moves);
        nextTurn = this.getNextTurn();
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
            nextTurn = this.getNextTurn();
        }

        san = nextTurn[0];
        nextTurn.shift();

        if (!nextTurn.length) {
            // White and black have moved, increment the turn.
            nextTurn = this.getNextTurn();
        }

        return san;
    };

    this.peekNextMove = function peekNextMove() {
        // Initialize the first move if no move available.
        if (!nextTurn && turns.length) {
            nextTurn = this.getNextTurn();
        }

        if (nextTurn) {
            return nextTurn[0];
        }

        return null;
    };


    this.isTalWhite = function isTalWhite() {
        return currentGame.white === 'Mikhail Tal';
    };

    this.isPlayerMove = function isPlayerMove() {
        // If the first move of the game and player is white, player turn.
        if (!nextTurn && this.isTalWhite()) {
            return true;
        }

        var isWhite = this.isTalWhite(),
            whiteHasNotMoved = nextTurn.length === 2;

        var isBlack = !isWhite,
            blackHasNotMoved = nextTurn.length === 1;

        if (isWhite && whiteHasNotMoved) {
            return true;
        }

        if (isBlack && blackHasNotMoved && !whiteHasNotMoved) {
            return true;
        }

        return false;
    };

    this.setCurrentGame(currentGame);

});
