var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf');

var databaseSplitter = require('./helpers/databaseSplitter.js'),
    pgnConverter = require('./helpers/rawPgnConverter.js'),
    pgnWriter = require('./helpers/pgnWriter.js'),
    gameListMaker = require('./helpers/gameListMaker.js'),
    eco = require('./helpers/eco.js');

// Construct all games from the Tal database.
gulp.task('games-database', function () {
    var databasePath = path.normalize(path.join(__dirname, 'database', 'Tal.pgn'));
    databaseSplitter.readDatabase(databasePath)
    .then(function (data) {
        return databaseSplitter.splitDatabase(data);
    })
    .then(function (rawPgns) {
        var writePath = path.normalize(path.join(__dirname, 'database', 'games'));
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

// Get JSON of ECO codes.
gulp.task('eco-database', function () {
    eco.scrape();
});

gulp.task('games-list', function () {
    var readDir = path.normalize(path.join(__dirname, 'database', 'games')),
        writePath = path.normalize(path.join(__dirname, 'database', 'meta.js'));
    gameListMaker.writeGamesList({
        readFrom: readDir,
        writeTo: writePath
    });
});

var paths = {
    scripts: ['./app/js/**/*.js']
};

gulp.task('clean', function (cb) {
    return gulp
        .src('./app/build/**/*.js', {read: false})
        .pipe(rimraf());
});

gulp.task('scripts', function () {
    // Gulp kept appending to app-build.js instead of creating new.
    // What am I missing? I didn't have this problem before.
    return gulp
        .src(paths.scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['clean', 'scripts']);
});

