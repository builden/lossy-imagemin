var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function lossyImagemin(srcGlob, destPath, opt, cb) {
  if (typeof opt === 'function') {
    cb = opt;
    opt = {};
  }
  gulp.src(srcGlob, { base: opt.base })
    .pipe(imagemin({
      progressive: true,
      use: [
        pngquant(),
        mozjpeg({
          quality: opt.jpgQuality || '70'
        })
      ]
    }))
    .pipe(gulp.dest(destPath))
    .on('finish', cb);
};