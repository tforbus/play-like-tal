angular.module('PlayLikeTal.Filters')

/**
 * Translate an ECO code into an ECO name.
 * 'B37' -> Sicilian, Accelerated Fianchetto
 */
.filter('event', function () {
    return function (eventName) {
        if (!eventName || !angular.isString(eventName)) {
            return '';
        }

        if (eventName === '?') {
            return 'Unknown Event';
        }

        return eventName;
    };
});
