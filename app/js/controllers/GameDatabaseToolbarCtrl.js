angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseToolbarCtrl', function ($scope, $mdBottomSheet, $templateCache) {

    $scope.showFilters = function showFilters($event) {
        $mdBottomSheet.show({
            template: $templateCache.get('templates/filter.html'),
            controller: 'GameFilterCtrl',
            targetEvent: $event
        }).then(function (submitted) {
        });
    };
});
