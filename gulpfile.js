var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");

gulp.task("compile", function() {
  return gulp
    .src("./src/components/**/index.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")],
        javascriptEnabled: true
      })
    )
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("compileNebulaUi", function() {
  return gulp
    .src("./src/components/nebula-ui.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")],
        javascriptEnabled: true
      })
    )
    .pipe(gulp.dest("./dist/"));
});
