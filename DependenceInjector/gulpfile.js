// Grab our gulp packages
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    buffer = require('vinyl-buffer'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
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
var names = {
    mainDistFile: 'core',
    mainSourceFile: 'main'
};

var paths = {
    scripts: {
        sourceTS: [
            'source/**/*.ts',
            'source/typings/**.d.ts/',
            'source/interfaces/interfaces.d.ts'
        ],
        sourceJS: './source/js/processed/',
        dist: './dist/'
    },
    libs: [
        'node_modules/inversify/lib/inversify.js'
    ]
};

// Bundle all libs in a single file.
gulp.task('bundle:libs', function () {
    gulp.src(paths.libs)
        .pipe(sourcemaps.init())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(paths.scripts.sourceJS))
        .pipe(rename('libs.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scripts.dist)
        );
});

// Process .ts to .js and update the core
gulp.task('bundle:core', function () {
    var bundler = browserify({
        debug: true,
        standalone: names.mainDistFile
    });
    return gulp.src(paths.scripts.sourceTS)
        .pipe(tsProject())
        .on('error', swallowError)
        .js.pipe(gulp.dest(paths.scripts.sourceJS).on('end', function () {
            bundler.add(paths.scripts.sourceJS + names.mainSourceFile + '.js')
                .bundle()
                .pipe(source(names.mainDistFile + '.min.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({ loadMaps: true }))
                .pipe(uglify())
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest(paths.scripts.dist));
        }));
});

gulp.task('watch:core', function () {
    gulp.watch(paths.scripts.sourceTS, ['bundle:core']);

    gulp.watch("dist/core.min.js").on('change', function () {
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
