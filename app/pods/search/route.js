import Ember from 'ember';
import fakeData from 'app-search-images/data/search-fake';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      search: fakeData,
    });
  },
  
});
