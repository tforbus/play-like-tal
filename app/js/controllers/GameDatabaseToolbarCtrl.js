angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseToolbarCtrl', function ($scope, $mdDialog, $templateCache, databaseFilterService) {

    $scope.showFilters = function showFilters(evt) {
        //databaseFilterService.showFilters = true;
        $mdDialog.show({
            template: $templateCache.get('templates/filter.html'),
            targetEvent: evt
        });
    };
});
