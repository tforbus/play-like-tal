angular.module('PlayLikeTal.Filters')

/**
 * Translate an ECO code into an ECO name.
 * 'B37' -> Sicilian, Accelerated Fianchetto
 */
.filter('eco', function (ECO) {
    return function (code) {
        if (!code) {
            return '';
        }
        
        var upper = code.toUpperCase(),
            ecoInfo = ECO[upper];

        if (ecoInfo) {
            return ecoInfo.name;
        }

        return '';
    };
});
