import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['list-group'],

  modelReversed: computed.sort('model', function(a, b) {
    const first = Number(a.get('datecreate'));
    const two = Number(b.get('datecreate'));
    if (first < two) {
      return 1;
    } else if (first > two) {
      return -1;
    } else {
      return 0;
    }
  }),

  // model10:

});
