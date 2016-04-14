var assert = require('assert');

describe('Google', function () {
    this.timeout(5000);

    beforeEach(function (done) {
        browser.url('http://google.com');
        browser.call(done);
    });

    it('проверяет заголовок', function () {
        assert(browser.getTitle(), 'Google');
    });
});