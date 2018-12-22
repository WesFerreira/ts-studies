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
    uglify = require('gulp-uglify'),

    notify = require('gulp-notify');
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
gulp.task('build', function () {
    var tsProcessedFileName = 'tsBundle';
    var tsOutputFolder = 'source/js/processed/';
    var mainJsFile = tsOutputFolder + 'main.js'; // Processed from main.ts
    var bundleFileName = 'bundle';
    var bundleOutputFolder = 'dist';

    var bundler = browserify({
        debug: true,
        standalone: tsProcessedFileName
    });

    // Process .ts to .js
    gulp.src([
        'source/**/**.ts',
        'source/typings/**.d.ts/',
        'source/interfaces/interfaces.d.ts'
    ])
        .pipe(tsProject())
        .on('error', swallowError)
        .js.pipe(gulp.dest(tsOutputFolder));

    // Bundle .ts in a main file .js
    bundler.add(mainJsFile)
        .bundle()
        .pipe(source(tsProcessedFileName + '.js'))
        .pipe(gulp.dest(tsOutputFolder));

    // Bundle libs with main fle and uglify (bundle.js)
    return gulp.src([
        'source/lib/**/*.js',
        'node_modules/box2dweb/box2d.js',
        'node_modules/pixi.js/dist/pixi.js',
        tsOutputFolder + tsProcessedFileName + '.js',
    ])
        .pipe(sourcemaps.init())
        .pipe(concat(bundleFileName + '.js'))
        .pipe(gulp.dest(bundleOutputFolder))
        .pipe(rename(bundleFileName + '.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(bundleOutputFolder)
        );
});

gulp.task('build:watch', function () {
    gulp.watch(['./source/**/*.ts'], ['build']);

    gulp.watch(outputFileName).on('change', function () {
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
