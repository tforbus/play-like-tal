angular.module('PlayLikeTal.Services')
.service('ecoListService', function (ECO) {
    var ecoCodes = Object.keys(ECO),
        nameMap = {};

    this.getNameToCodesMap = function getNameToCodesMap() {
        if (Object.keys(nameMap).length) {
            return nameMap;
        }

        angular.forEach(ecoCodes, function (ecoCode) {
            var code = ecoCode,
                name = ECO[code].name.split(',')[0],
                codesForName;

            // this is not quite right, but is okay for now.
            if (!nameMap[name]) {
                nameMap[name] = [];
            }

            codesForName = nameMap[name];
            if (codesForName.indexOf(code) < 0) {
                codesForName.push(code);
            }
        });

        return nameMap;
    };

    this.setEcos = function setEcos(arrayOfCodes) {
        this.ecos = arrayOfCodes;
    };
});
