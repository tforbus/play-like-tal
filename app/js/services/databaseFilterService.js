angular.module('PlayLikeTal.Services')
.service('databaseFilterService', function (COLORS) {

    this.databaseFilter = {
        color: angular.copy(COLORS.any),
        eco: ''
    };

    var backup = angular.copy(this.databaseFilter);

    this.setColor = function setColor(color) {
        this.databaseFilter.color = color;
    };

    this.setEco = function setEco(eco) {
        if (eco === backup.eco) {
            return;
        }
        this.databaseFilter.eco = eco;
    };
});
