angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseCtrl', function (
            $rootScope,
            $scope,
            $location,
            $mdBottomSheet,
            $mdSidenav,
            $routeParams,
            PLAY_LIKE,
            gameListService) {

    $scope.limit = 20;
    $scope.gamesToShow = [];
    $scope.games = [];
    $scope.slice = {
        start: 0,
        end: $scope.limit
    };

    $scope.$on('filterApplied', function (evt, filteredGames) {
        $scope.games = filteredGames;
        $scope.gamesToShow = $scope.games.slice(0, 20);
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

    $scope.loadGame = function loadGame(gameId) {
        $location.path('/game/' + gameId);
        $mdSidenav('left').close();
    };

    // Initially no filters are applied so just grab the whole list of games.
    gameListService.getGameList().then(function (games) {
        $scope.games = games;
        $scope.gamesToShow = $scope.games.slice(0, 20);
    });

});
