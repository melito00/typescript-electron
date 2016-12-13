var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("app"));
});

// gulp.task("watch", function() {
//   gulp.watch("./src/**/*.{ts,tsx}", ["build"]);
// });

gulp.task('watch', ['build'], function(){
  var watcher = gulp.watch('./src/**/*.{ts,tsx}', ['build']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task("default", ["build"]);