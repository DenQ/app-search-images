import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['photos-list'],
  tagName: 'ul',
  
  actions: {
    showPhoto(model) {
      if (Ember.typeOf(this.get('handlerClick')) === "function") {
        this.sendAction('handlerClick', model);
      }
    },
  },

});
