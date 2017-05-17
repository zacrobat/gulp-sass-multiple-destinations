var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

// rename via string
gulp.src("./source/markup-source/one.html")
  .pipe(rename("markup-destination/one-one.html"))
  .pipe(gulp.dest("./destination/"));


gulp.task('default', ['sass', 'sass:watch']);

// sass
gulp.task('sass', function () {
  return gulp.src('./source/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./destination/components/css-import'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/sass/*.scss', ['sass']);
});
