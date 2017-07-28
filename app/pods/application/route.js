import Ember from 'ember';
import nprogress from 'ember-cli-nprogress';

export default Ember.Route.extend({
  actions: {
    loading(transition) {
      nprogress.start();

      transition.finally(() => {
        nprogress.done();
      });

      return true;
    }
  },
});
