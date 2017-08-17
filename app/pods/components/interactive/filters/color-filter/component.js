import Ember from 'ember';
import colors from 'app-search-images/libs/const/color-schema';

export default Ember.Component.extend({
  colors,
  setColors: '',

  activeColors: Ember.computed('colors', 'activeColorCodes', function() {
    const colors = this.get('colors');
    const activeColorCodesString = this.get('activeColorCodes');
    const activeColorCodesCollection = activeColorCodesString.split(',');
    return colors.map((item) => {
      activeColorCodesCollection.forEach((color) => {
        const isActive = String(color) === String(item.id);
        Ember.set(item, 'isActive', isActive);
      });
      return item;
    });
  }),

  actions: {
    setColor(color) {
      const { id } = color;
      const route = this.get('currentRoute').getRoute();
      route.transitionTo({
        queryParams: {
          colorCodes: id,
          page: 1,
        }
      });
    },
  },
});
