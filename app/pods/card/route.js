import Ember from 'ember';
import fakeData from 'app-search-images/data/search-fake';

export default Ember.Route.extend({

  model(params) {
    const { id } = params;
    const card = fakeData.filter(item => item.id === id);
    return Ember.RSVP.hash({
      card: card[0],
    });
  },

});
