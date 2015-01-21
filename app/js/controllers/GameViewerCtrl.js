angular.module('PlayLikeTal.Controllers')
.controller('GameViewerCtrl', function ($scope, game) {
    
    // game is injected from the resolve.
    $scope.game = game;
});
