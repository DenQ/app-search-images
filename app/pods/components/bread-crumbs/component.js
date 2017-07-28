import Ember from 'ember';
import BreadCrumbsBase from 'ember-crumbly/components/bread-crumbs';

const {
  get,
  computed,
  getWithDefault,
  assert,
} = Ember;

export default BreadCrumbsBase.extend({
  routeHierarchy: computed('currentUrl', 'currentRouteName', 'reverse', {
    get() {
      const currentRouteName = getWithDefault(this, 'currentRouteName', false);

      assert('[ember-crumbly] Could not find a current route', currentRouteName);

      const routeNames = currentRouteName.split('.');
      const filteredRouteNames = this._filterIndexAndLoadingRoutes(routeNames);
      const crumbs = this._lookupBreadCrumb(routeNames, filteredRouteNames);

      const currenController = this.get('currentRoute').getController();
      const queryParam = currenController.get('q');
      if (queryParam) {
        const searchItem = {
          param: queryParam,
          isHead: true,
          isTail: true,
          linkable: true,
          path: 'search',
          title: 'Search',
        };
        crumbs.splice(crumbs.length-1, 0, searchItem);
      }

      return get(this, 'reverse') ? crumbs.reverse() : crumbs;
    }
  }).readOnly(),
});
