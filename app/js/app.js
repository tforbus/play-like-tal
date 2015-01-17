angular.module('PlayLikeTal.Controllers', []);
angular.module('PlayLikeTal.Constants', []);
angular.module('PlayLikeTal.Directives', []);
angular.module('PlayLikeTal.Services', []);
angular.module('templates', []);

angular
.module('PlayLikeTal', [
    'ngRoute',
    'ngMaterial',
    'templates',
    'PlayLikeTal.Constants',
    'PlayLikeTal.Controllers',
    'PlayLikeTal.Directives',
    'PlayLikeTal.Services',
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/introduction.html'
    });
});
