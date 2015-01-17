angular.module('PlayLikeTal.Controllers')
.controller('GameFilterCtrl', function ($scope, $mdBottomSheet) {

    // This will probably need to be saved in a service.
    $scope.playerColor = { value: '' };

    $scope.$watch('playerColor.value', function () {
        if (!$scope.playerColor.value) {
            return;
        }

        $mdBottomSheet.hide($scope.playerColor.value);
    });
});
