const assert = require('assert');
const app = require('../../src/app');

describe('\'course\' service', () => {
  it('registered the service', () => {
    const service = app.service('course');

    assert.ok(service, 'Registered the service (course)');
  });
});
