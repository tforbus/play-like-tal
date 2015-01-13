angular.module('PlayLikeTal.Controllers')
.controller('GameDatabaseCtrl', function ($scope) {

    $scope.colorFilter = { value: 'either' };

    $scope.games = [
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        },
        {
            id: 1,
            year: 1952,
            white: 'Tal, Mikhail',
            black: 'NN',
            result: '1-0'
        },
        {
            id: 2,
            year: 1953,
            white: 'NN',
            black: 'Tal, Mikhail',
            result: '0-1'
        }
    ];
});
