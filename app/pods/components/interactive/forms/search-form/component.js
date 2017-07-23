import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  disabled: computed.empty('searchString'),

  actions: {
    send() {
      const searchString = this.get('searchString');
      const route = this.get('currentRoute').getRoute();
      route.transitionTo('search', searchString);
    },
  },
});
