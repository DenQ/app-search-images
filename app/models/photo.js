import DS from 'ember-data';
import Ember from 'ember';
import { number, string, structure } from '../libs/types-shims';

export default DS.Model.extend({
  title       : string,
  description : string,
  views       : number,
  count_faves : number,
  sizes       : structure,
  comments    : structure,

  lastSize: Ember.computed('sizes', function() {
    const sizes = this.get('sizes.size');
    return Ember.A(sizes).get('lastObject');
  }),
});
