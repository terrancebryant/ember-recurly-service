import loadRecurlyScript from 'dummy/utils/load-recurly-script';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Utility | load-recurly-script', function(hooks) {
  setupTest(hooks);
  // Replace this with your real tests.
  test('it returns a promise', function(assert) {
    let result = loadRecurlyScript('https://js.recurly.com/v4/recurly.js');
    assert.ok(result);
  });
});
