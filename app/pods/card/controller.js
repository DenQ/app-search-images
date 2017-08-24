import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,
  open: false,
  photoCurrent: null,

  actions: {
    showPhoto(photo) {
      this.setProperties({
        openModal: true,
        photoCurrent: photo,
      });
    },
  },

});
