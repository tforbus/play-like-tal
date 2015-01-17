angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseCtrl', function ($scope, $location, $mdBottomSheet, $mdSidenav, $routeParams, PLAY_LIKE) {

    /**
     * Determine if Tal is white.
     * If he is, the game name format will be vs Opponent instead of Opponent vs
     * @param {object} game
     * @return {boolean}
     */
    $scope.isTalWhite = function isTalWhite(game) {
        return game.white === PLAY_LIKE.name;
    };

    $scope.getOpponent = function getOpponent(game) {
        if ($scope.isTalWhite(game)) {
            return game.black;
        }
        return game.white;
    };

    $scope.isSelectedGame = function isSelectedGame(gameId) {
        return parseInt(gameId, 10) === parseInt($routeParams.game, 10);
    };

    $scope.formatEvent = function formatEvent(chessEvent) {
        if (!chessEvent || chessEvent === '?') {
            return 'Unknown';
        }
        return chessEvent;
    };


    /**
     * Switch to the currently selected game ID
     * @param {number} gameId
     */
    $scope.loadGame = function loadGame(gameId) {
        $mdSidenav('left').toggle();
        $location.path('/game/' + gameId);
    };

    $scope.games = [
        {
            id: 1,
            year: 1952,
            white: 'Mikhail Tal',
            black: 'Kasparov',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'Fisher',
            black: 'Mikhail Tal',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Mikhail Tal',
            black: 'Gomez',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'Botvinnik',
            black: 'Mikhail Tal',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Mikhail Tal',
            black: 'Hecht',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'Larsen',
            black: 'Mikhail Tal',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Mikhail Tal',
            black: 'Miller',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'Karpov',
            black: 'Mikhail Tal',
            result: '0-1'
        }
    ];
});
