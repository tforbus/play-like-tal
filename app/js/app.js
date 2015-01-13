angular.module('PlayLikeTal.Controllers', []);
angular.module('PlayLikeTal.Directives', []);
angular.module('PlayLikeTal.Services', []);
angular.module('PlayLikeTal.Filters', []);
angular.module('templates', []);

angular.module('PlayLikeTal', [
    'ngMaterial',
    'templates',
    'PlayLikeTal.Filters',
    'PlayLikeTal.Controllers',
    'PlayLikeTal.Directives',
    'PlayLikeTal.Services',
]);
