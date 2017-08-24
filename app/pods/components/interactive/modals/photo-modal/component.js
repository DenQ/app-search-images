import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onHide() {
      this.set('open', false);
    },
  }
});
