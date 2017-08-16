import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interactive/filters/color-filter', 'Integration | Component | interactive/filters/color filter', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interactive/filters/color-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interactive/filters/color-filter}}
      template block text
    {{/interactive/filters/color-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
