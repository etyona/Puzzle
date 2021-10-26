// パッケージを読み込む
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');


//ローカルサーバーを起動
const server = () => browserSync.init({
    server: {
        // baseDir: "docs",
        index: "index.html"
    }
});

//ブラウザをリロード
const browserReload = () => browserSync.reload();

//jsファイルを監視
const watchReload = () => watch("js/*.js", browserReload);

//自動リロードサーバー
const watchReloadServer = () => {
    server();
    watchReload();
}

//デフォルトタスク
exports.default = watchReloadServer;

//実行⇒　npx gulp