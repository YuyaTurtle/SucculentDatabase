import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | succulent-type', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly for a Type: Other', async function(assert) {
    this.set('inputValue', 'Random');
    
    await render(hbs`{{succulent-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Other');
  });

  test('it renders correctly for succulent types', async function(assert) {
    this.set('inputValue', 'succulent');

    await render(hbs`{{succulent-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Succulent');
  });

});
