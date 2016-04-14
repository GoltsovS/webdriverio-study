var assert = require('assert'),
    webdriverio = require('webdriverio'),
    client = webdriverio.remote({
        desiredCapabilities: {
            browserName: 'chrome'
        }
    });

describe('Google', function () {
    this.timeout(5000);

    beforeEach(function (done) {
        client
            .init()
            .url('http://google.com')
            .call(done);
    });

    it('проверяет заголовок', function (done) {
        client
            .getTitle(function (error, title) {
                assert.equal(title, 'Google');
            })
            .call(done);
    });

    afterEach(function (done) {
        client
            .end()
            .call(done);
    });
});