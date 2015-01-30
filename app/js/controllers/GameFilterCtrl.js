angular.module('PlayLikeTal.Controllers')
.controller('GameFilterCtrl', function ($scope,
            $mdDialog,
            databaseFilterService,
            ecoListService,
            gameListService) {

    $scope.playerColor = {
        value: databaseFilterService.databaseFilter.color
    };

    $scope.opening = {
        ecos: databaseFilterService.databaseFilter.ecos || ''
    };

    $scope.ecos = ecoListService.getNameToCodesMap();

    $scope.$watch('playerColor.value', function (value) {
        if (!value) {
            return;
        }
    });

    $scope.applyFilters = function applyFilters() {
        databaseFilterService.setColor($scope.playerColor.value);
        databaseFilterService.setEcos($scope.opening.ecos);
        gameListService.applyFilter(databaseFilterService.databaseFilter);
        $mdDialog.hide();
    };

    $scope.cancel = function cancel() {
        $mdDialog.hide();
    };

});
