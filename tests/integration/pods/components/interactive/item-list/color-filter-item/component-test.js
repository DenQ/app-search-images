import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interactive/item-list/color-filter-item', 'Integration | Component | interactive/item list/color filter item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interactive/item-list/color-filter-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interactive/item-list/color-filter-item}}
      template block text
    {{/interactive/item-list/color-filter-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
