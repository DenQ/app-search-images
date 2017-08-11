import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';
import { number, string } from 'app-search-images/libs/types-shims';

export default DS.Model.extend({
  author      : string,
  authorname  : string,
  iconserver  : number,
  iconfarm    : number,
  datecreate  : number,
  permalink   : string,
  path_alias  : string,
  realname    : string,
  message     : string,

  ago: Ember.computed('datecreate', function() {
    const datecreate = this.get('datecreate');
    return moment(Number(datecreate) * 1000, 'x').format('ll');
  }),
});
