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
    sort: {
      refreshModel: true,
      replace: true,
    },
  },

  model(params) {
    const { searchString, page, perPage, colorCodes, sort } = params;
    // console.log(1, sort);
    const search = this.get('actionData').searchItem({
      color_codes: colorCodes,
      text: searchString,
      per_page: perPage,
      page,
      sort: Ember.isEmpty(sort) ? 'relevance' : sort,
    });

    return Ember.RSVP.hash({
      searchString,
      search,
    });
  },

});
