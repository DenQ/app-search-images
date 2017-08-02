import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    const { card } = model;
    return card.get('title._content');
  },
  breadCrumb: {
    title: 'Card',
  },

  model(params) {
    const { id } = params;
    const action = this.get('actionData');
    const comments = action.searchComments(id);
    const card = action.searchCard(id);

    return Ember.RSVP.hash({
      comments,
      card,
    });
  },

});
