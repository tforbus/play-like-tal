var gulp = require('gulp');

var databaseSplitter = require('./helpers/databaseSplitter.js'),
    pgnConverter = require('./helpers/rawPgnConverter.js'),
    pgnWriter = require('./helpers/pgnWriter.js'),
    eco = require('./helpers/eco.js');

// Construct all games from the Tal database.
gulp.task('games-database', function () {
    var databasePath = __dirname + '/database/Tal.pgn';
    databaseSplitter.readDatabase(databasePath)
    .then(function (data) {
        return databaseSplitter.splitDatabase(data);
    })
    .then(function (rawPgns) {
        var writePath = __dirname + '/database/games',
            pgns = [];

        rawPgns.forEach(function (pgn) {
            pgns.push(pgnConverter.constructPgnObject(pgn));
        });

        return pgnWriter.saveWinningGames(writePath, pgns);
    })
    .catch(function (err) {
        console.error(err);
    });
});

/*
// Get JSON of ECO codes.
gulp.task('eco-database', function () {
    eco.scrape();
});
*/
