var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('test', function (done) {
  gulp.src(['lib/**/*.js', 'test/**/*.js'])
    .pipe(plugins.istanbul())
    .pipe(plugins.istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(['test/**/*.js'])
        .pipe(plugins.mocha({
          reporter: 'nyan',
          timeout: 10000
        }))
        .pipe(plugins.istanbul.writeReports())
        .on('end', done);
    });
});

gulp.task('jshint', function () {
  gulp.src(['lib/**/*.js', 'test/**/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});