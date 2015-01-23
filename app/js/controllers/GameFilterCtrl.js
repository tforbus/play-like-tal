angular.module('PlayLikeTal.Controllers')
.controller('GameFilterCtrl', function ($scope, $mdBottomSheet, databaseFilterService, gameListService) {

    $scope.playerColor = {
        value: databaseFilterService.databaseFilter.color
    };

    $scope.applyFilters = function applyFilters() {
        databaseFilterService.setColor($scope.playerColor.value);
        $mdBottomSheet.hide(databaseFilterService.databaseFilter);
        gameListService.applyFilter(databaseFilterService.databaseFilter);
    };

});
