import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interactive/lists/comments-list', 'Integration | Component | interactive/lists/comments list', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{interactive/lists/comments-list}}`);
  assert.equal(this.$().text().trim(), 'Empty list');
});
