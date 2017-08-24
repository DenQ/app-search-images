import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,

  actions: {
    showPhoto(photo) {
      console.log(111, photo);
    },
  },

});
