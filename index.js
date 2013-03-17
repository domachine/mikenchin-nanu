var nanu = require('nanu');
module.exports = function (app, next) {
  var config = app.configuration || {};
  config = config.nanu;
  if (config) {
    nanu = new nanu.Nanu(config.name, config.host);
    app.register('nanu', nanu);
  }
  next();
};
