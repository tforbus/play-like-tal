angular.module('PlayLikeTal.Controllers', []);
angular.module('PlayLikeTal.Directives', []);
angular.module('PlayLikeTal.Services', []);
angular.module('PlayLikeTal.Filters', []);
angular.module('templates', []);

angular.module('PlayLikeTal', [
    'ngMaterial',
    'templates',
    'PlayLikeTal.Filters',
    'PlayLikeTal.Controllers',
    'PlayLikeTal.Directives',
    'PlayLikeTal.Services',
]);

angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseCtrl', function ($scope) {

    $scope.colorFilter = { value: 'either' };

    $scope.games = [
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        }
    ];
});

angular.module('PlayLikeTal.Filters').filter('nameSplit', function () {
    return function (input) {
        if (!input || !angular.isString(input)) {
            return '';
        }

        if (input.indexOf(',') < 0) {
            return input;
        }

        var lastName = input.split(/,\s+/)[0];
        return lastName;
    };
});

/**
 * Wrapper for chessboardjs
 */
angular.module('PlayLikeTal.Services')
.factory('ChessBoard', function ($window) {
    return $window.ChessBoard;
});

/**
 * Wrapper for chessjs
 */
angular.module('PlayLikeTal.Services')
.factory('ChessLogic', function ($window) {
    return $window.Chess;
});

angular.module('PlayLikeTal.Services')

// to give a hint, we know that the move is Nf6, e.g.
// look through each square of the board and find the square that has f6 listed
// as a legal move.
// logic.moves({square: ''})
// logic.get(square) returns piece on the square.
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

        if (nextTurn.white) {
            san = nextTurn.white;
            delete nextTurn.white;
        } else {
            san = nextTurn.black;
            delete nextTurn.black;

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

        return false;
    };

});

angular.module('PlayLikeTal.Directives')

.directive('chessboard', function ($timeout, $templateCache, ChessBoard, ChessLogic, gameTrackerService) {
    return {
        restrict: 'E',
        scope: {
            boardId: '@'
        },
        controller: function ($scope) {
            $scope.chessboard = null;
            $scope.logic = null;
            $scope.playerColor = null;

            // Execute the computer's next move.
            function doComputerMove() {
                $scope.logic.move(gameTrackerService.getNextMove());
                $scope.chessBoard.position($scope.logic.fen());
            }

            // Don't allow the wrong color piece to be dragged
            function onDragStart(source, piece, position, orientation) {
                var turn = $scope.logic.turn();

                var badMove1 = turn === 'w' && (piece.search(/^b/) !== -1),
                    badMove2 = turn === 'b' && (piece.search(/^w/) !== -1),
                    gameOver = $scope.logic.game_over();

                if (gameOver || badMove1 || badMove2) {
                    return false;
                }
            }

            function highlightLegal(square) {
                var $square = $('#' + $scope.boardId + ' .square-' + square),
                    background = '#a9a9a9';
                if ($square.hasClass('black-3c85d')) {
                    background = '#696969';
                }

                $square.css('background', background);
            }

            function unhighlightAll() {
                $('#board .square-55d63').css('background', '');
            }

            // On dropping a piece, if it's off board, return it.
            // If it's not the correct move, return it and show a message.
            // If it's the correct move, allow the move and show a success.
            function onDrop(source, target) {

                // Don't want to do the move on the actual board, 
                // so copy the logic of the board and try the move out first.
                var move = new ChessLogic($scope.logic.fen()).move({
                    from: source,
                    to: target,
                    promotion: 'q' // all promotions were queens
                });

                // Invalid move, return piece.
                if (!move) {
                    return 'snapback';
                }

                var isMyMove = gameTrackerService.isPlayerMove(),
                    nextMove = gameTrackerService.peekNextMove();

                if (isMyMove && move.san !== nextMove) {
                    move = null;
                    return 'snapback';
                }

                // If successful move, the computer does the next move.
                if (isMyMove && move.san === nextMove) {
                    $scope.logic.move({
                        from: source,
                        to: target,
                        promotion: 'q'
                    });

                    // Increment the next move.
                    gameTrackerService.getNextMove();
                    $timeout(doComputerMove, 500);
                }

            }

            // Need this for castling.
            function onSnapEnd() {
                $scope.chessBoard.position($scope.logic.fen());
            }

            function onMouseoverSquare(square, piece) {
                var legalMoves = $scope.logic.moves({
                    square: square,
                    verbose: true
                });

                if (!legalMoves.length) {
                    return;
                }

                // Highlight the square hovered on.
                highlightLegal(square);

                legalMoves.forEach(function (move) {
                    highlightLegal(move.to);
                });
            }

            function onMouseoutSquare() {
                unhighlightAll();
            }

            $scope.initGame = function initGame() {
                // Set the player color
                if (gameTrackerService.isTalWhite()) {
                    $scope.playerColor = 'white';
                } else {
                    $scope.playerColor = 'black';
                }

                $scope.chessBoard = new ChessBoard($scope.boardId, {
                    draggable: true,
                    position: 'start',
                    orientation: $scope.playerColor,
                    onDragStart: onDragStart,
                    onDrop: onDrop,
                    onSnapEnd: onSnapEnd,
                    onMouseoverSquare: onMouseoverSquare,
                    onMouseoutSquare: onMouseoutSquare,
                    onTapSquare: function onTap(square, piece) {
                        console.log(square);
                        console.log(piece);
                        console.log('a tap was detected.');
                    }
                });
                $scope.logic = new ChessLogic();

                // Computer will make first move.
                if ($scope.playerColor === 'black') {
                    doComputerMove();
                }
            };
        },
        link: function (scope, elem, attrs, ctrl) {
            // TODO: find a nicer way to do this. Ideally I wouldn't be setting HTML here.
            var div = elem.find('#board-container');
            div.html('<div id="' + scope.boardId + '" style="width:400px;"></div>');
            scope.initGame();
        },
        template: $templateCache.get('directives/chessboard/chessboard.html')
    };
});


angular.module('PlayLikeTal.Directives')
.directive('chessviewer', function ($templateCache) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            boardId: '@'
        },
        controller: function ($scope) {
            this.boardId = $scope.boardId;
        }
    };
});
