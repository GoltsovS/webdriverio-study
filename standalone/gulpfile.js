var gulp = require('gulp'),
    selenium = require('selenium-standalone'),
    mocha = require('gulp-mocha');

gulp.task('selenium', function (done) {
    selenium.install(
        {
            logger: function (message) {
                console.log(message);
            }
        },
        function (error) {
            if (error) return done(error);

            selenium.start(function (error, child) {
                if (error) return done(error);
                selenium.child = child;
                done();
            });
        }
    );
});

gulp.task('mocha', ['selenium'], function () {
    return gulp
        .src('tests/**/*Test.js', {read: false})
        .pipe(mocha());
});

gulp.task('test', ['mocha'], function () {
    selenium.child.kill();
});