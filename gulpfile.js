var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass', 'sass:watch']);

// folders
// folder = {
//   src: 'source/',
//   dest: 'destination/'
// }

// sass
gulp.task('sass', function () {
  return gulp.src('./source/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./destination/components/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/sass/*.scss', ['sass']);
});
