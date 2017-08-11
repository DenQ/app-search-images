import DS from 'ember-data';

const { attr } = DS;

export const boolean = attr('boolean');
export const number = attr('number');
export const string = attr('string');
export const structure = attr();

export const belongsTo = DS.belongsTo;
export const hasMany = DS.hasMany;
