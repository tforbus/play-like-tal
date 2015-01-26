angular.module('PlayLikeTal.Directives')
.directive('bottomMenu', function ($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get('templates/filter.html')
    };
});
