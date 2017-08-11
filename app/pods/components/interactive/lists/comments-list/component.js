import Ember from 'ember';
import computedReverse from 'app-search-images/libs/computed/reverse';

// const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['list-group'],

  modelReversed: computedReverse('datecreate'),
  // model10:

});
