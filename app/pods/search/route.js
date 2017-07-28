import Ember from 'ember';
// import fakeData from 'app-search-images/data/search-fake';

export default Ember.Route.extend({
  titleToken: function(model) {
    const { searchString } = model;
    return `search:${searchString}`;
  },

  model(params) {
    const { searchString } = params;

    const x = this.store.query('searchItem', {
      sort: 'relevance',
      content_type: 7,
      format: 'json',
      nojsoncallback: 1,
      text: searchString,
      method: 'flickr.photos.search',
      api_key: 'bf041bd78a382f2b6600956a65239c28',
      extras: 'can_comment,count_comments,count_faves,description,isfavorite,license,media,needs_interstitial,owner_name,path_alias,realname,rotation,url_c,url_l,url_m,url_n,url_q,url_s,url_sq,url_t,url_z',
    });

    return Ember.RSVP.hash({
      searchString,
      search: x,
    });
  },

});
