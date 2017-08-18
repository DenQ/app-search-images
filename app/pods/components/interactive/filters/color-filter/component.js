import Ember from 'ember';
import colors from 'app-search-images/libs/const/color-schema';

export default Ember.Component.extend({
  colors,

  activeColors: Ember.computed('colors', 'activeColorCodes', function() {
    const colors = this.get('colors');
    const activeColorCodesString = this.get('activeColorCodes') || '';
    const activeColorCodesCollection = activeColorCodesString.split(',');

    return colors.map((item) => {
      const isActive = activeColorCodesCollection.includes(String(item.id));
      Ember.set(item, 'isActive', isActive);
      return item;
    });
  }),

  actions: {
    setColor(color) {
      const { id } = color;
      const idString = String(id);
      const activeColorCodesString = this.get('activeColorCodes') || '';
      const activeColorCodesCollection = activeColorCodesString.split(',');
      if (activeColorCodesCollection.includes(idString)) {
        const index = activeColorCodesCollection.indexOf(idString);
        activeColorCodesCollection.splice(index, 1);
      } else {
        activeColorCodesCollection.push(idString);
      }
      const colorCodes = activeColorCodesCollection
        .filter((item) => !Ember.isEmpty(item))
        .join(',');

      const route = this.get('currentRoute').getRoute();
      route.transitionTo({
        queryParams: {
          colorCodes: colorCodes || undefined,
          page: 1,
        }
      });
    },
  },
});
