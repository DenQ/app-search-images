import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interactive/panels/advenced-search-panel', 'Integration | Component | interactive/panels/advenced search panel', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interactive/panels/advenced-search-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interactive/panels/advenced-search-panel}}
      template block text
    {{/interactive/panels/advenced-search-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
