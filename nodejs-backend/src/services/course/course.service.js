const { Course } = require('./course.class');
const createModel = require('../../models/course.model');
const hooks = require('./course.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/course', new Course(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('course');

  service.hooks(hooks);
};