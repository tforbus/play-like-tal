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
                    onMouseoutSquare: onMouseoutSquare
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
            elem.html('<div id="' + scope.boardId + '" style="width:400px;"></div>');
            scope.initGame();
        },
        template: $templateCache.get('directives/chessboard/chessboard.html')
    };
});

