import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload /* , id, requestType */) {
    if (payload.comments.comment) {
      payload.comments = payload.comments.comment;
      payload.comments = payload.comments.map((item) => {
        item.message = item._content;
        return item;
      });
    } else {
      payload.comments = [];
    }
    return this._super(...arguments);
  },

});
