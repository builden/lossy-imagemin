var fs = require('fs');
var del = require('del');
var expect = require('chai').expect;

var imagemin = require('../lib/lossy-imagemin.js');

var tmpPath = 'test/tmp-result-res';
describe('lossy-imagemin', function () {
  before(function () {
    del.sync(tmpPath);
    fs.mkdirSync(tmpPath);
  });

  it('retain dir info', function (done) {
    imagemin('test/res/**/*', 'test/tmp-result-res', {
      base: 'test/res',
      pngQuality: '50-70',
      jpgQuality: '50'
    }, function (err) {
      expect(err).not.exist;
      expect(fs.existsSync(tmpPath + '/jpg/180.jpg')).to.be.ok;
      expect(fs.existsSync(tmpPath + '/png/buff_boom_1.png')).to.be.ok;
      done();
    });
  });

  it('not retain dir info', function (done) {
    imagemin(['test/res/jpg/180.jpg', 'test/res/png/buff_boom_1.png'], 'test/tmp-result-res', function (err) {
      expect(err).not.exist;
      expect(fs.existsSync(tmpPath + '/180.jpg')).to.be.ok;
      expect(fs.existsSync(tmpPath + '/buff_boom_1.png')).to.be.ok;
      done();
    });
  });
});