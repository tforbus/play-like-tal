angular.module('PlayLikeTal.Controllers')
.controller('ToolbarCtrl', function ($scope, $log, $mdSidenav) {

    $scope.openMenu = function openMenu() {
        $mdSidenav('left').toggle();
    };

});
