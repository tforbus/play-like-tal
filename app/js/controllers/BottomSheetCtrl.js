angular.module('PlayLikeTal.Controllers')
.controller('BottomSheetCtrl', function ($scope) {
    $scope.show = false;

    $scope.toggleSheet = function toggleSheet() {
        $scope.show = !$scope.show;
    };
});
