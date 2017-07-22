import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interactive/forms/search-form', 'Integration | Component | interactive/forms/search form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interactive/forms/search-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interactive/forms/search-form}}
      template block text
    {{/interactive/forms/search-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
