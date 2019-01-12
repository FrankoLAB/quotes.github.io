var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('app/scss/style.sass')
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

gulp.task('watch', gulp.parallel('browser-sync', gulp.parallel('sass'), function(){
  gulp.watch('app/scss/**/*.sass', gulp.series('sass')); 
  // другие ресурсы
}));