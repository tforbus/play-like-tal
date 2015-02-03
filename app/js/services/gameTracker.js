angular.module('PlayLikeTal.Services')

// to give a hint, we know that the move is Nf6, e.g.
// look through each square of the board and find the square that has f6 listed
// as a legal move.
// logic.moves({square: ''})
// logic.get(square) returns piece on the square.
.service('gameTrackerService', function ($http, PLAY_LIKE) {

    // Save the current game.
    //var currentGame ={"event":"?","site":"Riga","date":1949,"round":"?","white":"Mikhail Tal","black":"Leonov","result":{"white":"1","black":"0"},"eco":"B13","moves":[["e4","c6"],["d4","d5"],["exd5","cxd5"],["Bd3","Nf6"],["h3","h6"],["Bf4","e6"],["Nf3","Bd6"],["Bxd6","Qxd6"],["c3","Nc6"],["O-O","O-O"],["Qe2","Re8"],["Ne5","Qc7"],["f4","Nxe5"],["fxe5","Nh7"],["Qh5","Re7"],["Na3","a6"],["Nc2","Qd7"],["Ne3","Qe8"],["Rf6","Qf8"],["Rf4","Bd7"],["Ng4","Be8"],["Nf6+","Nxf6"],["exf6","Rc7"],["fxg7","Kxg7"],["Qe5+"]]};

    var moves,
        currentMoveIndex,
        currentGame;

    /**
     * Load a game from an endpoint and set it as the current.
     * @param {string} url - the game endpoint.
     * @return {promise}
     */
    this.loadGame = function loadGame(url) {
        return $http.get('./database/games/' + url + '.js')
        .success(function (response) {
            this.setCurrentGame(response); 
            return currentGame;
        }.bind(this));
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
        moves = game.moves;
        currentMoveIndex = 0;
    };

    this.incrementMove = function incrementMove() {
        currentMoveIndex = currentMoveIndex + 1;

        if (currentMoveIndex > moves.length) {
            return null;
        }

        return moves[currentMoveIndex];
    };

    this.peekNextMove = function peekNextMove() {
        if (currentMoveIndex < 0) {
            return moves[0];
        }

        if (currentMoveIndex > moves.length) {
            return null;
        }

        return moves[currentMoveIndex];
    };


    this.isTalWhite = function isTalWhite() {
        return currentGame.white === PLAY_LIKE.name;
    };

    this.isPlayerMove = function isPlayerMove() {
        if (currentMoveIndex > moves.length) {
            return false;
        }

        var isWhite = this.isTalWhite();
        var isWhiteTurn = currentMoveIndex % 2 < 1;

        if (isWhite && isWhiteTurn) {
            return true;
        }

        if (!isWhite && !isWhiteTurn) {
            return true;
        }

        return false;
    };

    //this.setCurrentGame(currentGame);

});
