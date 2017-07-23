import Ember from 'ember';

const { getOwner } = Ember;

export default Ember.Service.extend({

  getRoute() {
    const appController = getOwner(this).lookup('controller:application');
    const path = appController.get('currentPath');
    const route = getOwner(this).lookup(`route:${path}`);
    return route;
  },

  getController() {
    const route = this.getRoute();
    return route.get('controller');
  },

  getCurrentPath() {
    const appController = getOwner(this).lookup('controller:application');
    return appController.get('currentPath');
  },

});
