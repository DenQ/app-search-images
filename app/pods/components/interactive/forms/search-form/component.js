import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  disabled: computed.empty('searchString'),

});
