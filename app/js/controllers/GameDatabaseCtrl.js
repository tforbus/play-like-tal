angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseCtrl', function ($rootScope, $scope, $location, $mdBottomSheet, $mdSidenav, $routeParams, PLAY_LIKE, gameListService) {

    $scope.limit = 20;
    $scope.gamesToShow = [];

    $scope.slice = {
        start: 0,
        end: $scope.limit
    };

    $scope.$on('filterUpdated', function (evt, filter) {
        console.log(filter);
    });

    $scope.loadMore = function loadMore() {
        if (!$scope.gamesToShow.length) {
            return;
        }

        $scope.slice.start += $scope.limit;
        $scope.slice.end += $scope.limit;

        if ($scope.slice.start > $scope.games.length) {
            return false;
        }

        if ($scope.slice.end > $scope.games.length) {
            $scope.slice.end = $scope.games.length;
        }

        var slice = $scope.games.slice($scope.slice.start, $scope.slice.end);
        angular.forEach(slice, function (game) {
            $scope.gamesToShow.push(game);
        });
    };

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
        $location.path('/game/' + gameId);
        $mdSidenav('left').close();
    };

    gameListService.getGameList().then(function (games) {
        $scope.games = games;
        $scope.gamesToShow = $scope.games.slice(0, 20);
    });

});
