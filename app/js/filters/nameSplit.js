angular.module('PlayLikeTal.Filters').filter('nameSplit', function () {
    return function (input) {
        if (!input || !angular.isString(input)) {
            return '';
        }

        if (input.indexOf(',') < 0) {
            return input;
        }

        var lastName = input.split(/,\s+/)[0];
        return lastName;
    };
});
