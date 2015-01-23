angular.module('PlayLikeTal.Services')
.service('databaseFilterService', function ($rootScope, COLORS) {

    this.databaseFilter = {
        color: angular.copy(COLORS.any),
        eco: ''
    };

    var backup = angular.copy(this.databaseFilter);

    this.setColor = function setColor(color) {
        if (color === backup.color) {
            return;
        }

        this.databaseFilter.color = color;
        $rootScope.$broadcast('filterUpdated', this.databaseFilter);
    };

    this.setEco = function setEco(eco) {
        if (eco === backup.eco) {
            return;
        }
        this.databaseFilter.eco = eco;
        $rootScope.$broadcast('filterUpdated', this.databaseFilter);
    };
});
