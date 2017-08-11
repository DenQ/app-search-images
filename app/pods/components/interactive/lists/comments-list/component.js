import Ember from 'ember';
import computedReverse from 'app-search-images/libs/computed/reverse';
import computedZeroSlice from 'app-search-images/libs/computed/zero-slice';

const { computed } = Ember;
const SIZE_COMMEMTS = 10;

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['list-group'],

  modeFull: false,
  more10: computed.gt('model.length', SIZE_COMMEMTS),
  isEmpty: computed.empty('model'),

  modelReversed: computedReverse('datecreate'),
  model10: computedZeroSlice('modelReversed', SIZE_COMMEMTS),
  modelResult: computed('model', 'modeFull', function() {
    const modeFull = this.get('modeFull');
    return modeFull ? this.get('modelReversed') : this.get('model10');
  }),
  showButton: computed('more10', 'modeFull', function() {
    const modeFull = this.get('modeFull');
    const more10 = this.get('more10');
    return !modeFull && more10;
  }),

  actions: {
    showMore() {
      this.set('modeFull', true);
    },
  },
});
