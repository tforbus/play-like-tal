angular.module('PlayLikeTal.Services')
.service('gameListService', function ($filter, $http, $log, $q, $rootScope, COLORS, PLAY_LIKE, databaseFilterService) {

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
            var allEcos = [];
            var allYears = [];

            angular.forEach(response.data, function (game) {
                this.games.push(game);

                if (allEcos.indexOf(game.eco) < 0) {
                    allEcos.push(game.eco);
                }

                if (allYears.indexOf(game.date) < 0) {
                    allYears.push(game.date);
                }
            }.bind(this));

            databaseFilterService.allEcos = allEcos;
            databaseFilterService.allYears = allYears;

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

        if (filter.openingName) {
            var reg = new RegExp(filter.openingName, 'i'),
                toName = $filter('eco');

            this.filteredGames = this.filteredGames.filter(function (game) {
                return reg.test(toName(game.eco));
            });
        }

        // Filter the ECO if one is specified
        else if (filter.ecos) {
            this.filteredGames = this.filteredGames.filter(function (game) {
                return filter.ecos === game.eco;
            });
        }

        if (filter.year) {
            this.filteredGames = this.filteredGames.filter(function (game) {
                return filter.year === game.date;
            });
        }

        $rootScope.$broadcast('filterApplied', this.filteredGames);
        return this.filteredGames;
    };

});
