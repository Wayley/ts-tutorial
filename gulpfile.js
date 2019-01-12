var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var tsify = require('tsify')

var paths = {
  pages: ['src/*.html']
}
gulp.task('copy-html', function() {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'))
})

var browserifyParams = {
  basedir: '.',
  debug: true,
  entries: ['src/main.ts'],
  cache: {},
  packageCache: {}
}

gulp.task('default', ['copy-html'], function() {
  return browserify(browserifyParams)
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
})
// /*  */
