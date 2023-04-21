const users = require("./users/users.service.js");
const studentinfo = require("./studentinfo/studentinfo.service.js");
const application = require("./application/application.service.js");
const enrolment = require("./enrolment/enrolment.service.js");
const fees = require("./fees/fees.service.js");
const course = require("./course/course.service.js");
const program = require("./program/program.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(studentinfo);
  app.configure(application);
  app.configure(enrolment);
  app.configure(fees);
  app.configure(course);
  app.configure(program);
  // ~cb-add-configure-service-name~
};
