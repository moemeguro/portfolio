
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const imagemin = require("gulp-imagemin");
const cleanCss = require("gulp-clean-css");


// style.scssをタスクを作成する
gulp.task("scss:dev", () => {
  return (
    gulp
      .src("src/scss/style.scss")
      .pipe(
        sass.sync({
          outputStyle: "expanded"
        })
      )
      .pipe(postcss([
        autoprefixer({
          cascade: false,
          grid: 'autoplace',
        }),
      ]))
      .pipe(cleanCss())
      .pipe(gulp.dest("dist/css"))
  );
});


// javascriptファイルの圧縮
const webpackConfig = require("./webpack.config");
const webpack = require("webpack");
const webpackStream = require('webpack-stream');

gulp.task("webpack", () =>
  // gulp
    // .src(["src/js/index.js", "src/js/sub.js"])
    webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest("dist/js"))
);



// 画像の圧縮
gulp.task("imagemin", () =>
  gulp
    .src(["src/images/*"])
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
);




gulp.task('default', gulp.series(
  gulp.parallel(
    'scss:dev',
    'webpack',
    'imagemin'
    ), function(done){
      done();
  }
));

