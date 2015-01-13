angular.module('PlayLikeTal.Controllers', []);
angular.module('PlayLikeTal.Directives', []);
angular.module('PlayLikeTal.Services', []);
angular.module('templates', []);

angular.module('PlayLikeTal', [
    'ngMaterial',
    'templates',
    'PlayLikeTal.Controllers',
    'PlayLikeTal.Directives',
    'PlayLikeTal.Services',
]);

angular.module('PlayLikeTal').config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryColor('blue-grey')
        .accentColor('deep-orange');
});
