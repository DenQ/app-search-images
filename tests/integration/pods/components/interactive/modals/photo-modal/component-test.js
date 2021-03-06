import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interactive/modals/photo-modal', 'Integration | Component | interactive/modals/photo modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interactive/modals/photo-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interactive/modals/photo-modal}}
      template block text
    {{/interactive/modals/photo-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
