import DS from 'ember-data';
import { string } from 'app-search-images/libs/types-shims';

export default DS.Model.extend({
  title: string,
  url_q: string,

});
