var gulp = require('gulp'),
    webdriver = require('gulp-webdriver'),
    selenium = require('selenium-standalone');

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

gulp.task('wdio', ['selenium'], function() {
    return gulp.src('wdio.conf.js').pipe(webdriver());
});

gulp.task('test', ['wdio'], function () {
    selenium.child.kill();
});