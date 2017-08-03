import Ember from 'ember';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload /* , id, requestType */) {
    const { page, pages, perpage } = Ember.assign({}, payload.photos);
    const scope = this.get('scope');
    scope.set('search', {
      perpage,
      pages,
      page,
    });
    payload.searchItems = payload.photos.photo;
    delete payload.photos;
    return this._super(...arguments);
  },

});
