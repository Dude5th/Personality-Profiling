// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('node_modules/semantic-ui-less/*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return "./src/style.css"//f.base;
        }))
});

gulp.task('default', ['less'], function() {
    gulp.watch('*.less', ['less']);
})