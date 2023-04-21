const { Program } = require('./program.class');
const createModel = require('../../models/program.model');
const hooks = require('./program.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/program', new Program(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('program');

  service.hooks(hooks);
};