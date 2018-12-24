// Grab our gulp packages
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    concat = require('gulp-concat'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    eventStream = require('event-stream'),
    uglify = require('gulp-uglify');

var tsProject = tsc.createProject('tsconfig.json');
// TODO: Check if all dependencies are in use

function swallowError(error) {
    // If you want details of the error in the console
    console.log(error.toString())
    this.emit('end')
}

/////////////////////////////////////////////////////////////////////////////////
//                                   .JS                                       //
/////////////////////////////////////////////////////////////////////////////////

var tsProcessedFileName = 'core';
var tsOutputFolder = 'source/js/processed/';
var mainJsFile = tsOutputFolder + 'main.js'; // Processed from main.ts
var bundleFileName = 'bundle';
var bundleOutputFolder = 'dist';

var bundler = browserify({
    debug: true,
    standalone: tsProcessedFileName
});

function processTS() {
    // Process .ts to .js
    return gulp.src([
        'source/**/**.ts',
        'source/typings/**.d.ts/',
        'source/interfaces/interfaces.d.ts'
    ])
        .pipe(tsProject())
        .on('error', swallowError)
        .js.pipe(gulp.dest(tsOutputFolder).on('end', function () {
            bundler.add(mainJsFile)
                .bundle()
                .pipe(source(tsProcessedFileName + '.min.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({ loadMaps: true }))
                .pipe(uglify())
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest(tsOutputFolder));
        }));
}


function bundleLibs() {
    // Bundle libs with main fle and uglify (bundle.js)
    gulp.src([
        'node_modules/box2dweb/box2d.js',
        'node_modules/pixi.js/dist/pixi.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(rename('libs.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(bundleOutputFolder)
        );
}

gulp.task('bundle:libs', function () {
    bundleLibs();
});

gulp.task('build', function () {
    processTS();
    // bundleFinal();
});

gulp.task('build:watch', function () {
    gulp.watch(['./source/**/*.ts'], ['build']);

    gulp.watch("dist/bundle.min.js").on('change', function () {
        notify({
            title: 'JS Updates',
            message: 'Oh Yeaaah! You are awesome man.'
        }).write('');
    });
});

/////////////////////////////////////////////////////////////////////////////////
//                                  SASS                                       //
/////////////////////////////////////////////////////////////////////////////////
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init()) // Start Sourcemaps
        .pipe(sass())
        .on('error', swallowError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.')) // Creates sourcemaps for minified styles
        .pipe(gulp.dest('./css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);

    gulp.watch('./css/app.min.css').on('change', function () {
        notify({
            title: 'Css Updates',
            message: 'Great Desing!.'
        }).write('');
    });
});
