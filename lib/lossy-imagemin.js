var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function lossyImagemin(srcGlob, destPath, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  var imgOpts = {
    progressive: true,
    use: [
      pngquant(),
      mozjpeg({
        quality: opts.jpgQuality || '70'
      })
    ]
  };

  if (opts.cache === false) {
    gulp.src(srcGlob, { base: opts.base })
      .pipe(imagemin(imgOpts))
      .pipe(gulp.dest(destPath))
      .on('finish', cb);
  } else {
    gulp.src(srcGlob, { base: opts.base })
      .pipe(cache(imagemin(imgOpts)))
      .pipe(gulp.dest(destPath))
      .on('finish', cb);
  }
};