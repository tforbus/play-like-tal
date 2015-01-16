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
                    files = 'abcdefg'.split(''),
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

