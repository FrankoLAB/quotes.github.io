var gulp 		  = require('gulp'),
	sass 		  = require('gulp-sass'),
	browserSync   = require('browser-sync').create(),
	htmlmin 	  = require('gulp-htmlmin');

gulp.task('sass', function(){
  return gulp.src('app/scss/main_style.scss')
    .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('minify', () => {
  return gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', gulp.parallel('browser-sync', gulp.parallel('sass'), function(){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
  // другие ресурсы
}));