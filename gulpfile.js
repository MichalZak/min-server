var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    gulpPlumber = require('gulp-plumber');

gulp.task('serve', function () {
    livereload.listen();

    nodemon({
        script: 'server.js',
        ext: 'js njk html css ',
        ignore: [ ]
    }).on('restart', function () {
        setTimeout(function () {
            console.log("reload!");
            livereload.reload();
        }, 500);
    });

});




gulp.task('default', ['serve']);  