angular.module('PlayLikeTal.Directives')
.directive('hijacker', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind(attrs.hijacker, function (e) {
                return e.stopPropagation();
            });
        }
    };
});
