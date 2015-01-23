angular.module('PlayLikeTal.Controllers')
.controller('GameFilterCtrl', function ($scope, $mdBottomSheet, databaseFilterService) {

    // This will probably need to be saved in a service.
    $scope.playerColor = {
        value: databaseFilterService.databaseFilter.color
    };

    $scope.applyFilters = function applyFilters() {
        databaseFilterService.setColor($scope.playerColor.value);
        $mdBottomSheet.hide();
    };

    /*
    $scope.onColorChange = function onColorChange() {
        databaseFilterService.setColor($scope.playerColor.value);
        $mdBottomSheet.hide($scope.playerColor.value);
    };
    */
});
