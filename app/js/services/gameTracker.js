angular.module('PlayLikeTal.Services')

// to give a hint, we know that the move is Nf6, e.g.
// look through each square of the board and find the square that has f6 listed
// as a legal move.
// logic.moves({square: ''})
// logic.get(square) returns piece on the square.
.service('gameTrackerService', function ($http, PLAY_LIKE) {

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

});
