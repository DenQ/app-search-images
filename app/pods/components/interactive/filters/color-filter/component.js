import Ember from 'ember';
import colors from 'app-search-images/libs/const/color-schema';

export default Ember.Component.extend({
  colors,
  setColors: '',

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
