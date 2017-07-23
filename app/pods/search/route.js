import Ember from 'ember';
import fakeData from 'app-search-images/data/search-fake';

export default Ember.Route.extend({

  model(params) {
    const { searchString } = params;
    
    const x = this.store.queryRecord('searchItem', {
      content_type: 7,
      text: searchString,
      method: 'flickr.photos.search',
      api_key: 'bf041bd78a382f2b6600956a65239c28',
      format: 'json',
    });

    return Ember.RSVP.hash({
      search: fakeData,
    });
  },

});
