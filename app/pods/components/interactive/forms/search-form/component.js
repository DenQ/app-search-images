import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  disabled: computed.empty('searchString'),

  actions: {
    send() {
      const searchString = this.get('searchString');
      console.log(333, searchString);
    },
  },
});
