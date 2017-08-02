import DS from 'ember-data';

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

});
