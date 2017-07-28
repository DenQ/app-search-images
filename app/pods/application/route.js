import Ember from 'ember';
import nprogress from 'ember-cli-nprogress';

export default Ember.Route.extend({
  title(tokens) {
    tokens = Ember.makeArray(tokens);
    tokens.unshift('Search images');
    return tokens.reverse().join(' - ');
  },
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
