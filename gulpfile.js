var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsFiles = ['*.js', 'scr/**/*.js'];

gulp.task('style', function() {
  return gulp.src(jsFiles)
    .pipe(jshint());
});
