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
        templateUrl: 'templates/introduction.html'
    })
    .when('/game/:id', {
        templateUrl: 'templates/game.html',
        controller: 'GameViewerCtrl',
        resolve: {
            game: function (gameTrackerService, $q, $route, $routeParams) {
                var deferred = $q.defer();

                var id = $route.current.params.id,
                    currentGame;
                gameTrackerService.loadGame(id).then(function () {
                    currentGame = gameTrackerService.getCurrentGame();
                    deferred.resolve(currentGame);
                });

                return deferred.promise;
            }
        }
    });
});
