import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    const { searchString } = model;
    return `search:${searchString}`;
  },
  breadCrumb: {
    title: 'Search',
  },

  model(params) {
    const { searchString } = params;
    const search = this.get('action').searchItem(searchString);

    return Ember.RSVP.hash({
      searchString,
      search,
    });
  },

});
