var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  });
});

gulp.task('default', ['browserSync'], function(){
	gulp.watch('./*.html', browserSync.reload); 
  	gulp.watch('./js/**/*.js', browserSync.reload);
  	gulp.watch('./css/**/*.css', browserSync.reload);  
});