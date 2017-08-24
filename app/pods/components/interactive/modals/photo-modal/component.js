import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed('model.source', function() {
    const model = this.get('model');
    if (model) {
      const { width, height } = model;
      return `Show image (${width} x ${height})`;
    }
  }),
  sizeClass: Ember.computed('model.width', function() {
    const width = Number(this.get('model.width'));
    if (width < 600) {
      return '';
    } else if (width < 1000) {
      return 'lg'
    } else if (width < 1200) {
      return 'lgx';
    } else {
      return 'lgxx';
    }
  }),
  actions: {
    onHide() {
      this.set('open', false);
    },
  }
});
