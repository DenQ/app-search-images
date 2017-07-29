import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload /* , id, requestType */) {
    payload.searchItems = payload.photos.photo;
    delete payload.photos;
    return this._super(...arguments);
  },

});
