const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

// Задача для компіляції SCSS в CSS та збереження в окремі папки
gulp.task('compile-scss', function () {
  return gulp.src('scss/*.scss') // шлях до ваших scss файлів
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css')); // папка для збереження скомпільованих CSS файлів
});

// Спостереження за змінами у файлах SCSS
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['compile-scss']);
});

// Запустіть `gulp` у терміналі для початку слідкування за змінами та автоматичної компіляції
gulp.task('default', ['watch']);
