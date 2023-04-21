const { Fees } = require('./fees.class');
const createModel = require('../../models/fees.model');
const hooks = require('./fees.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fees', new Fees(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fees');

  service.hooks(hooks);
};