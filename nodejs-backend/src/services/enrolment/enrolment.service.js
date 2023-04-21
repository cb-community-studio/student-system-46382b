const { Enrolment } = require('./enrolment.class');
const createModel = require('../../models/enrolment.model');
const hooks = require('./enrolment.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/enrolment', new Enrolment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('enrolment');

  service.hooks(hooks);
};