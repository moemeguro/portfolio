
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const imagemin = require("gulp-imagemin");


// style.scssをタスクを作成する
gulp.task("scss:dev", () => {
  return (
    gulp
      .src("src/scss/style.scss")
      .pipe(
        sass({
          outputStyle: "expanded"
        })
      )
      .pipe(postcss([
        autoprefixer({
          cascade: false,
          grid: 'autoplace',
        }),
      ]))
      .pipe(gulp.dest("dist/css"))
  );
});


// javascriptファイルの圧縮
gulp.task("compress", () =>
  gulp
    .src(["src/js/index.js", "src/js/sub.js"])
    .pipe(uglify())
    .pipe(gulp.dest("dist"))
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
    'compress',
    'imagemin'
    ), function(done){
      done();
  }
));

