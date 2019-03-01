import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | connect-on-didreceiveattrs-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it can access state on didReceiveAttrs', async function(assert) {
    await render(hbs`{{connect-on-didreceiveattrs-component}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
