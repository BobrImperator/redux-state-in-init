import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | connect-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it can access state on init', async function(assert) {
    await render(hbs`{{connect-component}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
