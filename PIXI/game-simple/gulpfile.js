// Grab our gulp packages
var gulp = require("gulp"),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify"),

    notify = require('gulp-notify');
var tsProject = tsc.createProject("tsconfig.json");
// TODO: Check if all dependencies are in use

function swallowError(error) {
    // If you want details of the error in the console
    console.log(error.toString())
    this.emit('end')
}

/////////////////////////////////////////////////////////////////////////////////
//                                   .JS                                       //
/////////////////////////////////////////////////////////////////////////////////
gulp.task("build", function () {
    var libraryName = "main";
    var mainTsFilePath = "assembled/js/main.js";
    var outputFolder = "assembled/main/";
    var outputFileName = libraryName + ".min.js";

    var bundler = browserify({
        debug: true,
        standalone: libraryName
    });

    gulp.src([
        "src/**/**.ts",
        "src/typings/**.d.ts/",
        "src/interfaces/interfaces.d.ts"
    ])
        .pipe(tsProject())
        .on("error", swallowError)
        .js.pipe(gulp.dest("assembled/js"));

    return bundler.add(mainTsFilePath)
        .bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputFolder));
});
gulp.task("build:watch", function () {
    gulp.watch(["./src/**/*.ts"], ["build"]);

    gulp.watch("./assembled/main/main.min.js").on('change', function () {
        notify({
            title: "JS Updates",
            message: "Oh Yeaaah! You're awesome man."
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
        .on("error", swallowError)
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

    gulp.watch("./css/app.min.css").on('change', function () {
        notify({
            title: "Css Updates",
            message: "Great Desing!."
        }).write('');
    });
});
