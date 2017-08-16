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
    colorCodes: {
      refreshModel: true,
      replace: true,
    },
  },

  model(params) {
    const { searchString, page, perPage, colorCodes } = params;
    const search = this.get('actionData').searchItem({
      color_codes: colorCodes,
      text: searchString,
      per_page: perPage,
      page,
    });

    return Ember.RSVP.hash({
      searchString,
      search,
    });
  },

});
