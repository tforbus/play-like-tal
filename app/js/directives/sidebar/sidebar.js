angular.module('PlayLikeTal.Directives')
.directive('sidebar', function ($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get('directives/sidebar/sidebar.html')
    };
});
