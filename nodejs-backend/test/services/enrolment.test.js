const assert = require('assert');
const app = require('../../src/app');

describe('\'enrolment\' service', () => {
  it('registered the service', () => {
    const service = app.service('enrolment');

    assert.ok(service, 'Registered the service (enrolment)');
  });
});
