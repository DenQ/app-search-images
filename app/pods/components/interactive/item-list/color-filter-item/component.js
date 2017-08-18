import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  whiteSchemaClass: Ember.computed('model.whiteSchema', function() {
    const whiteSchema = this.get('model.whiteSchema');
    return whiteSchema ? 'whiteSchema' : '';
  }),

  actions: {
    onClick() {
      this.sendAction('handlerClick', this.get('model'));
    },
  },
});
