# browserify-single-bundle

See `gulpfile.babel.js`

単一のファイルにbundleするレシピ  
`bundleJS()`のオプションでファイル監視，圧縮（多段ソースマップ）を選択できる．

## `bundleJS(isWatch, isUglify)`

- `isWatch`
    - `true` => Use `watchify`
    - `false` => Use `browserify`
- `isUglify`
    - `true` => Use `gulp-sourcemaps` and `gulp-uglify`
    - `false` => Only `browserify`

`isUglify === true`の場合，`browserify`で`common.js`にbundleされたファイルを更にminifyする．  
このとき，`gulp-sourcemaps`が`browserify`が生成したinline sourcemapを読み込み，minify後のsourcemapと対応づける．

## 備考
- [gulpjs/gulp-util: Utilities for gulp plugins](https://github.com/gulpjs/gulp-util#noop)
    - 何もしないStreamを生成
