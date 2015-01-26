angular.module('PlayLikeTal.Services')
.service('databaseFilterService', function (COLORS) {

    this.showFilters = false;

    this.databaseFilter = {
        color: angular.copy(COLORS.any),
        eco: ''
    };

    this.setColor = function setColor(color) {
        this.databaseFilter.color = color;
    };

    this.setEco = function setEco(eco) {
        if (eco === backup.eco) {
            return;
        }
        this.databaseFilter.eco = eco;
    };

    this.getPossibleEcos = function getPossibleEcos() {
    };
});
