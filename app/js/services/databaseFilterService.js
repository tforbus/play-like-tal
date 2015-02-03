angular.module('PlayLikeTal.Services')
.service('databaseFilterService', function (COLORS) {

    this.showFilters = false;

    // Only want to have valid information in the dropdowns.
    // These values are set once all the games are retrieved in the gameListService.
    this.allYears = [];
    this.allEcos = [];

    this.databaseFilter = {
        color: angular.copy(COLORS.any),
        ecos: null,
        year: null
    };

    this.setColor = function setColor(color) {
        this.databaseFilter.color = color;
    };

    this.setEcos = function setEco(ecos) {
        if (!ecos || !ecos.length) {
            this.databaseFilter.ecos = null;
        } else {
            this.databaseFilter.ecos = ecos;
        }
    };

    this.setYear = function setYears(year) {
        this.databaseFilter.year = year;
    };

});
