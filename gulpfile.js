const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', ()=> {
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
});