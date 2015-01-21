angular.module('PlayLikeTal.Directives')
.directive('lazyLoad', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            $(elem).bind('scroll', function () {
                var el = $(this),
                    offset = 200;

                // Add some offset to keep the list from getting choppy at the bottom.
                if (el.scrollTop() + el.innerHeight() + offset >= el[0].scrollHeight) {
                    scope.$apply(attrs.lazyLoad);
                }
            });
        }
    };
});
