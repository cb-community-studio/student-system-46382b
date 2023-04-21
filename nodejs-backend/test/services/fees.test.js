const assert = require('assert');
const app = require('../../src/app');

describe('\'fees\' service', () => {
  it('registered the service', () => {
    const service = app.service('fees');

    assert.ok(service, 'Registered the service (fees)');
  });
});
