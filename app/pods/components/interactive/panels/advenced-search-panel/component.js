import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['advenced-search-panel'],

  fullNameChanged: Ember.observer('sort', function() {
    const sort = this.get('sort');
    const route = this.get('currentRoute').getRoute();
    route.transitionTo({
      queryParams: {
        page: 1,
        sort,
      }
    });
  }),

});
