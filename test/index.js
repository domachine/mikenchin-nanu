var mn,
    mockery = require('mockery'),
    should = require('should');
function Application() {
  this._cache = {};
}
Application.prototype.register = function (key, scope) {
  this._cache[key] = scope;
};
Application.prototype.require = function (key) {
  return this._cache[key];
};
describe('Mikenchin-nanu', function () {
  var app;
  before(function (done) {
    mockery.enable({
      warnOnUnregistered: false
    });
    mockery.registerMock('nanu', {
      Nanu: function (name, host) {
        this.host = host;
        this.database = name;
      }
    });
    mn = require('..');
    app = new Application();
    app.configuration = {
      nanu: {
        host: 'http://test.de',
        name: 'test'
      }
    };
    mn(app, done);
  });
  it('should read the settings and provide nanu binding', function () {
    var nanu = app.require('nanu');
    nanu.host.should.equal('http://test.de');
    nanu.database.should.equal('test');
  });
});
