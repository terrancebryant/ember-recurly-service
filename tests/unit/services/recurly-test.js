import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | recurly', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:recurly');
    assert.ok(service);
  });

  test('configure global recurly object with no configuration', function(assert) {
    let service = this.owner.lookup('service:recurly');
    assert.equal(service.configured, false)
    service.configureRecurly();
    assert.equal(service.configured, true)
  });

  test('configure global recurly object with configuration', function(assert) {
    let service = this.owner.lookup('service:recurly');
    let config = {
      publicKey: 'sc-ABCDEFGHI123456789'
    }
    service.configureRecurly(config);
    assert.equal(service.configured, true)
  });

  test('recurlyToken method', function(assert) {
    let service = this.owner.lookup('service:recurly');
    service.configureRecurly();
    let config = {
      first_name: 'Ace'
    }
    service.recurlyToken(config);
    assert.equal(service.configured, true)
  });
});

