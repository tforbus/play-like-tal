angular.module('PlayLikeTal.Directives')
.directive('chessviewer', function ($templateCache) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            boardId: '@'
        },
        controller: function ($scope) {
            this.boardId = $scope.boardId;
        }
    };
});
