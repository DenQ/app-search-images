import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  author: DS.attr('string'),
  authorname: DS.attr('string'),
  iconserver: DS.attr('number'),
  iconfarm: DS.attr('number'),
  datecreate: DS.attr('number'),
  permalink: DS.attr('string'),
  path_alias: DS.attr('string'),
  realname: DS.attr('string'),
  message: DS.attr('string'),

  ago: Ember.computed('datecreate', function() {
    const datecreate = this.get('datecreate');
    return moment(Number(datecreate) * 1000, 'x').format('ll');
  }),
});
