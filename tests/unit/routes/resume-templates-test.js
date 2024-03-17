import { module, test } from 'qunit';
import { setupTest } from 'browsers/tests/helpers';

module('Unit | Route | resume-templates', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:resume-templates');
    assert.ok(route);
  });
});
