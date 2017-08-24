import DS from 'ember-data';
import Ember from 'ember';
import { number, string, structure } from '../libs/types-shims';

const { computed } = Ember;

export default DS.Model.extend({
  title       : string,
  description : string,
  views       : number,
  count_faves : number,
  sizes       : structure,
  comments    : structure,

  photos: computed.reads('sizes.size'),

  lastPhoto: computed('photos', function() {
    const photos = this.get('photos');
    return Ember.A(photos).get('lastObject');
  }),

  mediumPhoto: computed('photos', function() {
    const photos = this.get('photos');
    return Ember.A(photos).objectAt(4);
  }),

});
