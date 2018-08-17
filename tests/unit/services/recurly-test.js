import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | recurly', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:recurly');
    assert.ok(service);
  });
});

