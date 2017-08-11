import DS from 'ember-data';
import Ember from 'ember';

function request(store, type, query) {
  return new Ember.RSVP.Promise((resolve, reject) => {
    const host = this.get('host');
    Ember.$.getJSON(host, query).then(function(data) {
      resolve(data);
    }, function(jqXHR) {
      reject(jqXHR);
    });
  });
}

export default DS.RESTAdapter.extend({
  host: 'https://api.flickr.com/services/rest',
  queryRecord: request,
  query: request,

});
