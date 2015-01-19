angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseCtrl', function ($scope, $location, $mdBottomSheet, $mdSidenav, $routeParams, PLAY_LIKE, gameListService) {

    $scope.limit = 20;

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

    /**
     * Track the currently selected game to indicate it in the list.
     */
    $scope.isSelectedGame = function isSelectedGame(gameId) {
        return parseInt(gameId, 10) === parseInt($routeParams.game, 10);
    };

    /**
     * Switch to the currently selected game ID
     * @param {number} gameId
     */
    $scope.loadGame = function loadGame(gameId) {
        $mdSidenav('left').toggle();
        $location.path('/game/' + gameId);
    };

    gameListService.getGameList().then(function (games) {
        $scope.games = games;
    });

});
