const assert = require('assert');
const app = require('../../src/app');

describe('\'studentinfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('studentinfo');

    assert.ok(service, 'Registered the service (studentinfo)');
  });
});
