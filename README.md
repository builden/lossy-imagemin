# lossy imagemin
lossy compress image by imagemin-pngquant & imagemin-mozjpeg

## How to use
```js
var imagemin = require('lossy-imagemin');
var opt = {
  base: 'res',          // destPath retain src dir info
  jpgQuality: '70',     // max 100, default: 70
  cache: fasle          // use gulp cache [true]
};
imagemin(srcGlob, destPath, opt, function(err) {
  if (err) {
    console.error(err);
  }
});
```

## Installation
```sh
npm install --save lossy-imagemin
```

## Tests
```sh
npm install
npm test
```