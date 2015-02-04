angular.module('PlayLikeTal.Controllers')
.controller('GameFilterCtrl', function ($scope,
            $filter,
            $mdDialog,
            databaseFilterService,
            ecoListService,
            gameListService) {

    $scope.playerColor = {
        value: databaseFilterService.databaseFilter.color
    };

    $scope.opening = {
        ecos: databaseFilterService.databaseFilter.ecos || '',
        name: databaseFilterService.databaseFilter.openingName || ''
    };

    $scope.year = {
        value: databaseFilterService.databaseFilter.year || ''
    };

    $scope.ecos = databaseFilterService.allEcos
    .sort()
    .map(function (code) {
        return {
            value: code,
            label: code + ': ' + $filter('eco')(code)
        };
    });

    $scope.years = databaseFilterService.allYears;

    $scope.$watch('playerColor.value', function (value) {
        if (!value) {
            return;
        }
    });

    $scope.applyFilters = function applyFilters() {
        databaseFilterService.setColor($scope.playerColor.value);
        databaseFilterService.setEcos($scope.opening.ecos);
        databaseFilterService.setYear($scope.year.value);
        databaseFilterService.setOpeningName($scope.opening.name);
        gameListService.applyFilter(databaseFilterService.databaseFilter);
        $mdDialog.hide();
    };

    $scope.cancel = function cancel() {
        $mdDialog.hide();
    };

});
