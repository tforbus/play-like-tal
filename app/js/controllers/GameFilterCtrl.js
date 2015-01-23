angular.module('PlayLikeTal.Controllers')
.controller('GameFilterCtrl', function ($scope, $mdBottomSheet, databaseFilterService, gameListService) {

    $scope.possibleEcos = [];

    $scope.playerColor = {
        value: databaseFilterService.databaseFilter.color
    };

    $scope.$watch('playerColor.value', function (value) {
        if (!value) {
            return;
        }
        // Build a list of possible ECO codes that can be seen.
    });

    $scope.applyFilters = function applyFilters() {
        databaseFilterService.setColor($scope.playerColor.value);
        gameListService.applyFilter(databaseFilterService.databaseFilter);

        //$mdBottomSheet.hide(databaseFilterService.databaseFilter);
    };

});
