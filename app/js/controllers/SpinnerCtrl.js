angular.module('PlayLikeTal.Controllers')
.controller('SpinnerCtrl', function ($scope) {
    $scope.showSpinner = false;

    $scope.$on('showGameSpinner', function () {
        $scope.showSpinner = true;
    });

    $scope.$on('hideGameSpinner', function () {
        $scope.showSpinner = false;
    });
});
