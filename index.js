var nanu = require('nanu');
module.exports = function (app, next) {
  var instance,
      config = app.configuration || {};
  config = config.nanu;
  if (config) {
    instance = new nanu.Nanu(config.name, config.host);
    app.register('nanu', instance);
  }
  next();
};
