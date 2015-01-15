var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    templateCache = require('gulp-angular-templatecache');

var databaseSplitter = require('./helpers/databaseSplitter.js'),
    pgnConverter = require('./helpers/rawPgnConverter.js'),
    pgnWriter = require('./helpers/pgnWriter.js'),
    gameListMaker = require('./helpers/gameListMaker.js'),
    eco = require('./helpers/eco.js'),
    pgnScraper = require('./helpers/pgnScraper.js');

gulp.task('pgn-scraper', function () {
    pgnScraper.scrape(path.normalize(path.join(__dirname, 'database', 'TalWins2.pgn')));
});

// Construct all games from the Tal database.
gulp.task('games-database', function () {
    var databasePath = path.normalize(path.join(__dirname, 'database', 'TalWins2.pgn'));
    databaseSplitter.readDatabase(databasePath)
    .then(function (data) {
        return databaseSplitter.splitDatabase(data);
    })
    .then(function (rawPgns) {
        var writePath = path.normalize(path.join(__dirname, 'database', 'games2'));
            pgns = [];

        rawPgns.forEach(function (pgn) {
            pgns.push(pgnConverter.constructPgnObject(pgn));
            console.log(pgn);
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
    var readDir = path.normalize(path.join(__dirname, 'database', 'games2')),
        writePath = path.normalize(path.join(__dirname, 'database', 'meta2.js'));
    gameListMaker.writeGamesList({
        readFrom: readDir,
        writeTo: writePath
    });
});

var paths = {
    scripts: ['./app/js/**/*.js'],
    lib: ['./app/lib/js/**/*.js'],
    libCss: ['./app/lib/css/**/*.css'],
    templates: ['./app/js/**/*.html']
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

gulp.task('lib', function () {
    // order is important
    var bowerLibs = [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/angular/angular.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-aria/angular-aria.js',
        './bower_components/angular-animate/angular-animate.js',
        './bower_components/hammerjs/hammer.js',
        './bower_components/angular-material/angular-material.js'
    ];

    var libs = bowerLibs.concat(paths.lib);
    gulp
        .src(libs)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./app/build/'));

    gulp
        .src([
            './bower_components/angular-material/angular-material.css',
            './bower_components/angular-material/themes/blue-grey-theme.css',
            ].concat(paths.libCss))
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('templates', function () {
    return gulp.src(paths.templates)
        .pipe(templateCache())
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('watch', function () {
    gulp.watch([paths.templates, paths.scripts], [
        'clean',
        'lib',
        'scripts',
        'templates'
    ]);
});

