angular.module('PlayLikeTal.Constants', []);
angular.module('PlayLikeTal.Filters', []);
angular.module('PlayLikeTal.Controllers', []);
angular.module('PlayLikeTal.Directives', []);
angular.module('PlayLikeTal.Services', []);
angular.module('templates', []);

angular
.module('PlayLikeTal', [
    'infinite-scroll',
    'ngRoute',
    'ngMaterial',
    'templates',
    'PlayLikeTal.Constants',
    'PlayLikeTal.Filters',
    'PlayLikeTal.Controllers',
    'PlayLikeTal.Directives',
    'PlayLikeTal.Services'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/introduction.html',
        resolve: {
            allGames: function (gameListService) {
                // Load all the games before rendering.
                return gameListService.getGameList();
            }
        }
    })
    .when('/game/:id', {
        templateUrl: 'templates/game.html',
        controller: 'GameViewerCtrl',
        resolve: {
            game: function (gameTrackerService, $q, $rootScope, $route, $routeParams, $timeout) {
                var deferred = $q.defer(),
                    id = $route.current.params.id,
                    currentGame;

                // Small timeout to make it obvious the board is updating.
                $timeout(function () {
                    gameTrackerService.loadGame(id).then(function () {
                        currentGame = gameTrackerService.getCurrentGame();
                        deferred.resolve(currentGame);
                    });
                }, 300);

                return deferred.promise;
            }
        }
    });
})
.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.$broadcast('showGameSpinner');
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.$broadcast('hideGameSpinner');
    });

    $rootScope.$on('$routeChangeError', function () {
        $rootScope.$broadcast('hideGameSpinner');
    });
});
