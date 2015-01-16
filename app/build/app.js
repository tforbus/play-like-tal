angular.module('PlayLikeTal.Controllers', []);
angular.module('PlayLikeTal.Directives', []);
angular.module('PlayLikeTal.Services', []);
angular.module('templates', []);

angular.module('PlayLikeTal', [
    'ngMaterial',
    'templates',
    'PlayLikeTal.Controllers',
    'PlayLikeTal.Directives',
    'PlayLikeTal.Services',
])

// Inject this constant in any locations where name must be compared.
.constant('PLAY_LIKE', {
    name: 'Mikhail Tal'
});

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
.service('gameTrackerService', function (PLAY_LIKE) {

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
        return currentGame.white === PLAY_LIKE.name;
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

            // Tapping moves (mobile) is a little different.
            $scope.tappedMove = {
                legalMoves: [],
                source: '',
                target: ''
            };

            // Track if a hint is being shown. If a hint is shown, the mouseover
            // behavior is different. Don't highlight other legal moves on mouseover if
            // the hint is shown.
            $scope.showingHint = false;

            // Just use this for read only information.
            $scope.gameInformation = Object.freeze(angular.copy(gameTrackerService.getCurrentGame()));

            /**
             * Return all squares on a chessboard.
             * @return {array}
             */
            $scope.allSquares = function allSquares() {
                var ranks = '12345678'.split(''),
                    files = 'abcdefhg'.split(''),
                    squares = [];

                files.forEach(function (file) {
                    var result = ranks.map(function (n) {
                        return file + n;
                    });

                    squares = squares.concat(result);
                });

                return squares;
            };

            /**
             * Determine if a piece clicked is the player's piece.
             * @param {string} piece
             * @return {boolean}
             */
            $scope.isPlayerPiece = function isPlayerPiece(piece) {
                if (!piece) {
                    return false;
                }

                var isWhite = gameTrackerService.isTalWhite(),
                    isBlack = !isWhite,
                    isPieceWhite = piece.search(/^w/) !== -1,
                    isPieceBlack = piece.search(/^b/) !== -1;

                return (isWhite && isPieceWhite) || (isBlack && isPieceBlack);
            };

            /**
             * Determine if a piece moved was moved on the correct turn.
             * @param {string} piece
             * @return {boolean}
             */
            $scope.didMovePieceOnTurn = function didMovePieceOnTurn(piece) {
                var turn = $scope.logic.turn(),
                    isWhiteTurn = turn === 'w',
                    isBlackTurn = turn === 'b',
                    isPieceWhite = piece.search(/^w/) !== -1,
                    isPieceBlack = piece.search(/^b/) !== -1;

                return (isWhiteTurn && isPieceWhite) || (isBlackTurn && isPieceBlack);
            };

            /**
             * Indicate the legal squares a piece can move.
             * @param {string} square
             */
            $scope.indicateLegalMoves = function indicateLegalMoves(square) {
                function indicate(sq) {
                    var $sq = $(['#', $scope.boardId, ' .square-', sq].join('')),
                        bgColor = '#a9a9a9';

                    if ($sq.hasClass('black-3c85d')) {
                        bgColor = '#696969';
                    }
                    
                    $sq.css('background', bgColor);
                }

                var legalMoves = $scope.logic.moves({
                    square: square,
                    verbose: true
                });

                if (!legalMoves.length) {
                    return;
                }

                indicate(square);
                legalMoves.forEach(function (move) {
                    indicate(move.to);
                });
            };

            /**
             * Hide the highlights on legal moves already highlighted.
             */
            $scope.hideLegalMoves = function hideLegalMoves() {
                var selector = ['#', $scope.boardId, ' .square-55d63'].join('');
                $(selector).css('background', '');
            };

            /**
             * Highlight the square the user has tapped.
             */
            $scope.highlightSquare = function highlightSquare(square) {
                var selector = ['#', $scope.boardId, ' .square-', square].join('');
                $(selector).addClass('mobile-highlight-square');
            };

            $scope.unhighlightSquare = function unhighlightSquare(square) {
                var selector = ['#', $scope.boardId, ' .square-', square].join('');
                $(selector).removeClass('mobile-highlight-square');
            };

            /**
             * After a tap event, or a computer move, the board will not update.
             * Manually call the position from the new FEN.
             */
            $scope.updatePosition = function updatePosition() {
                $scope.chessBoard.position($scope.logic.fen());
            };

            /**
             * Execute the next move.
             */
            $scope.doNextMove = function doNextMove() {
                var move = gameTrackerService.getNextMove(),
                    computerMovesNext = !gameTrackerService.isPlayerMove();

                $scope.logic.move(move);
                $scope.updatePosition();

                if (computerMovesNext) {
                    $timeout($scope.doNextMove, 500);
                }

                // If the user did a hint and then showed the move,
                // must clear the legal moves highlights.
                $scope.showingHint = false;
                $scope.hideLegalMoves();

                if ($scope.tappedMove.source) {
                    $scope.unhighlightSquare($scope.tappedMove.source);
                }
            };

            /**
             * Show a hint for Tal's next move.
             */
            $scope.showHint = function showHint() {
                var nextMove = gameTrackerService.peekNextMove(),
                    allSquares = $scope.allSquares(),
                    allLegalMoves = [];

                allSquares.forEach(function (square) {
                    // all legal moves possible in the game.
                    allLegalMoves = allLegalMoves.concat($scope.logic.moves({
                        square: square,
                        verbose: true
                    }));
                });

                var possibleMoves = allLegalMoves.filter(function (m) {
                    var isColor = Boolean($scope.playerColor.match(m.color)),
                        canBeNext = m.san === nextMove;

                    return isColor && canBeNext;
                });

                possibleMoves.forEach(function (pMove) {
                    $scope.indicateLegalMoves(pMove.from);
                });

                $scope.showingHint = true;
            };

            /**
             * Don't allow the wrong color piece to be dragged.
             */
            function onDragStart(source, piece, position, orientation) {
                var noTurns = !gameTrackerService.peekNextMove(),
                    gameOver = $scope.logic.game_over(),
                    wrongPieceMoved = !$scope.didMovePieceOnTurn(piece);

                if (noTurns || gameOver || wrongPieceMoved) {
                    return false;
                }
            }

            /**
             * On dropping a piece, if it's off the board, return it to its original position.
             * If it's not this players move, return it to its original position.
             * If it's the correct move, allow it.
             */
            // TODO: check promotion/underpromotion and en passant
            function onDrop(source, target) {

                // Don't want to do the move on the actual board, 
                // so copy the logic of the board and try the move out first.
                var move = new ChessLogic($scope.logic.fen()).move({
                    from: source,
                    to: target,
                    promotion: 'q'
                });

                // Invalid move, return piece.
                if (!move) {
                    return 'snapback';
                }

                var isMyMove = gameTrackerService.isPlayerMove(),
                    nextMove = gameTrackerService.peekNextMove();

                // If the wrong move was selected, return the piece.
                if (isMyMove && move.san !== nextMove) {
                    move = null;
                    return 'snapback';
                }

                // If successful move, the computer does the next move.
                if (isMyMove && move.san === nextMove) {
                    $scope.showingHint = false;
                    $scope.logic.move({
                        from: source,
                        to: target,
                        promotion: 'q'
                    });

                    // Increment the next move.
                    gameTrackerService.getNextMove();
                    $timeout($scope.doNextMove, 500);
                }

            }

            // Need this for castling.
            function onSnapEnd() {
                $scope.updatePosition();
            }

            function onMouseoverSquare(square, piece) {
                if ($scope.showingHint) {
                    return;
                }
                $scope.indicateLegalMoves(square);
            }

            function onMouseoutSquare() {
                // Don't do anything if on mobile.
                if ($scope.tappedMove.legalMoves.length) {
                    return;
                }

                // Showing a hint, so don't hide the legal squares on mouseout.
                if ($scope.showingHint) {
                    return;
                }

                $scope.hideLegalMoves();
            }

            function onTapSquare(square, piece) {
                $scope.hideLegalMoves();

                var isMovingPiece = $scope.isPlayerPiece(piece);

                if ($scope.tappedMove.source) {
                    $scope.unhighlightSquare($scope.tappedMove.source);
                }

                // The player wants to move their piece.
                // This is the first tap.
                if (isMovingPiece) {
                    $scope.tappedMove.legalMoves = $scope.logic.moves({
                        square: square,
                        verbose: true
                    });

                    $scope.tappedMove.source = square;
                    $scope.indicateLegalMoves(square);
                    $scope.highlightSquare(square);
                    return;
                }

                // The second tap.
                if ($scope.tappedMove.legalMoves.length) {
                    $scope.tappedMove.target = square;

                    // Pretend the piece was dropped on the board.
                    onDrop($scope.tappedMove.source, $scope.tappedMove.target);

                    // Reset the tap information.
                    $scope.tappedMove.legalMoves = [];
                    $scope.tappedMove.source = '';
                    $scope.tappedMove.target = '';
                    $scope.hideLegalMoves();
                    $scope.updatePosition();

                    $scope.unhighlightSquare($scope.tappedMove.source);
                }
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
                    onTapSquare: onTapSquare
                });
                $scope.logic = new ChessLogic();

                // Computer will make first move.
                if ($scope.playerColor === 'black') {
                    $scope.doNextMove();
                }
            };
        },
        link: function (scope, elem, attrs, ctrl) {
            // Set initial width for mobile devices, etc.
            var windowWidth = $(window).width(),
                width = windowWidth < 400 ? windowWidth*0.8 : 400;

            // TODO: find a nicer way to do this. Ideally I wouldn't be setting HTML here.
            var div = elem.find('#board-container');
            div.html('<div id="' + scope.boardId + '" style="width:' + width + 'px;"></div>');
            scope.initGame();
            window.showHint = scope.showHint;
        },
        template: $templateCache.get('directives/chessboard/chessboard.html')
    };
});

