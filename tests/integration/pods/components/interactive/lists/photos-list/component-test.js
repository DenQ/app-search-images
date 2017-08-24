import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interactive/lists/photos-list', 'Integration | Component | interactive/lists/photos list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interactive/lists/photos-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interactive/lists/photos-list}}
      template block text
    {{/interactive/lists/photos-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
