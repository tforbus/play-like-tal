angular.module('PlayLikeTal.Services')
.service('gameListService', function ($http, $log, $q, $rootScope, COLORS, PLAY_LIKE) {

    // Games contains the list of all games, ever.
    this.games = [];

    // Filtered Games originally will contain all games from Games,
    // but as filters are applied, drops some of them. This list the one to display.
    this.filteredGames = [];

    /**
     * Return a promise containing the games.
     */
    this.getGameList = function getGameList() {
        // Once the games list has been set, don't keep doing HTTP calls.
        if (this.games.length) {
            return $q.when(this.games);
        }

        return $http.get('./app/build/meta.js').then(function success(response) {
            angular.forEach(response.data, function (game) {
                this.games.push(game);
            }.bind(this));
            return this.games;
        }.bind(this), function error(response) {
            $log.error(response);
        });
    };

    this.applyFilter = function applyFilter(filter) {
        this.filteredGames = angular.copy(this.games);

        // Filter the appropriate color if a color is specified.
        if (filter.color && (filter.color === COLORS.white || filter.color === COLORS.black)) {
            this.filteredGames = this.filteredGames.filter(function (game) {
                return game[filter.color] === PLAY_LIKE.name;
            });
        }

        // Filter the ECO if one is specified
        if (filter.ecos) {
            this.filteredGames = this.filteredGames.filter(function (game) {
                return filter.ecos.indexOf(game.eco) > 0;
            });
        }

        $rootScope.$broadcast('filterApplied', this.filteredGames);
        return this.filteredGames;
    };

});
