import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  sizes: DS.attr(),
  comments: DS.attr(),
  views: DS.attr('number'),
  count_faves: DS.attr('number'),


  lastSize: Ember.computed('sizes', function() {
    const sizes = this.get('sizes.size');
    return Ember.A(sizes).get('lastObject');
  }),
});
