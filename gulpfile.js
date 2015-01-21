var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    templateCache = require('gulp-angular-templatecache'),
    ngmin = require('gulp-ngmin'),
    uglify = require('gulp-uglify');

var databaseSplitter = require('./helpers/databaseSplitter.js'),
    pgnConverter = require('./helpers/rawPgnConverter.js'),
    pgnWriter = require('./helpers/pgnWriter.js'),
    gameListMaker = require('./helpers/gameListMaker.js'),
    eco = require('./helpers/eco.js'),
    pgnScraper = require('./helpers/pgnScraper.js');

// Just needs to be run if there are no games in the database.
gulp.task('pgn-scraper', function () {
    pgnScraper.scrape(path.normalize(path.join(__dirname, 'database', 'TalWins.pgn')));
});

// Construct all games from the Tal database.
gulp.task('games-database', function () {
    var databasePath = path.normalize(path.join(__dirname, 'database', 'TalWins.pgn'));
    databaseSplitter.readDatabase(databasePath)
    .then(function (data) {
        return databaseSplitter.splitDatabase(data);
    })
    .then(function (rawPgns) {
        var writePath = path.normalize(path.join(__dirname, 'database', 'games'));
            pgns = [];

        // convert raw pgn files into a pgn json object
        rawPgns.forEach(function (pgn) {
            pgns.push(pgnConverter.constructPgnObject(pgn));
        });

        // sort chronologically
        pgns.sort(function (a, b) {
            return a.date - b.date;
        });

        // assign ids after sorting
        pgns.forEach(function (pgn, index) {
            pgn.id = index + 1;
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
    app: ['./app/js/**/*.js'],
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
    gulp
        .src(paths.app)
        .pipe(concat('app.js'))
        //.pipe(ngmin())
        //.pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./app/build/'));

    gulp
        .src(['./database/meta.js'])
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('lib', function () {
    // order is important
    var bowerLibs = [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-aria/angular-aria.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/hammerjs/hammer.min.js',
        './bower_components/angular-material/angular-material.min.js'
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
            './bower_components/font-awesome/css/font-awesome.css'
            ].concat(paths.libCss))
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('./app/build/'));

    gulp
        .src(['./bower_components/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('./app/build/fonts/'));
});

gulp.task('templates', function () {
    return gulp.src(paths.templates)
        .pipe(templateCache())
        .pipe(gulp.dest('./app/build/'));
});

gulp.task('build', ['clean', 'lib', 'scripts', 'templates'], function () {
});

gulp.task('watch', function () {
    gulp.watch([paths.templates, paths.app], [
        'clean',
        'lib',
        'scripts',
        'templates'
    ]);
});

