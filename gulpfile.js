// Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Sass task
gulp.task('sassification', function () {
  return gulp.src('dev/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('prod/css'))
    .pipe(browserSync.stream()); // live inject CSS
});

// Copy plain CSS
gulp.task('css', function () {
  return gulp.src('dev/css/*.css')
    .pipe(gulp.dest('prod/css'))
    .pipe(browserSync.stream());
});

// HTML
gulp.task('htmlification', function () {
  return gulp.src('dev/*.html')
    .pipe(gulp.dest('prod'))
    .pipe(browserSync.stream());
});

// JavaScript
gulp.task('jsification', function () {
  return gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('prod/js'))
    .pipe(browserSync.stream());
});

// Images
gulp.task('imageTransfer', function () {
  return gulp.src('dev/img/**')
    .pipe(gulp.dest('prod/img'))
});

// Fonts
gulp.task('fontTransfer', function () {
  return gulp.src('dev/fonts/**')
    .pipe(gulp.dest('prod/fonts'))
});

// BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: 'prod/'
    }
  });
});

// Watch files
function watchFiles() {
  gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
  gulp.watch('dev/css/*.css', gulp.series('css'));
  gulp.watch('dev/*.html', gulp.series('htmlification'));
  gulp.watch('dev/js/*.js', gulp.series('jsification'));
  gulp.watch('dev/img/**', gulp.series('imageTransfer'));
  gulp.watch('dev/fonts/**', gulp.series('fontTransfer'));
}

// Main task
gulp.task('default', gulp.series(
  gulp.parallel('sassification', 'css', 'htmlification', 'jsification', 'imageTransfer', 'fontTransfer'),
  gulp.parallel('browser-sync', watchFiles)
));