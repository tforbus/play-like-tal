angular.module('PlayLikeTal.Services')
.service('gameListService', function ($http, $log, $q) {

    this.games = [];

    /**
     * Return a promise containing the games.
     */
    this.getGameList = function getGameList() {
        // Once the games list has been set, don't keep doing HTTP calls.
        if (this.games.length) {
            return $q.when(this.games);
        }

        // ???
        return $http.get('./build/meta.js').then(function success(response) {
            angular.forEach(response.data, function (game) {
                this.games.push(game);
            }.bind(this));
            return this.games;
        }.bind(this), function error(response) {
            $log.error(response);
        });

    };

});
