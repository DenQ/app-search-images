import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload /* , id, requestType */) {
    payload.photo.title = payload.photo.title._content;
    payload.photo.description = payload.photo.description._content;
    return this._super(...arguments);
  },
});
