import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    const { searchString } = model;
    return `search:${searchString}`;
  },
  breadCrumb: {
    title: 'Search',
  },
  queryParams: {
    page: {
      refreshModel: true,
      replace: true,
    },
    perPage: {
      refreshModel: true,
    },
  },

  model(params) {
    const { searchString, page, perPage } = params;
    const search = this.get('actionData').searchItem({
      searchString,
      perPage,
      page,
    });

    return Ember.RSVP.hash({
      searchString,
      search,
    });
  },

});
