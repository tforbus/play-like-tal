angular.module('PlayLikeTal.Services')
.service('databaseFilterService', function (COLORS) {

    this.showFilters = false;

    this.databaseFilter = {
        color: angular.copy(COLORS.any),
        ecos: null
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
});
