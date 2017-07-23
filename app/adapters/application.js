import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.flickr.com/services/rest',

  queryRecord(store, type, query) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.getJSON(this.get('host'), query).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
