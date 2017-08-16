import Ember from 'ember';

const colors = [
  {
    id: 0,
    code: '#ff2000',
    title: 'Red',
  },
  {
    id: 1,
    code: '#a24615',
    title: 'Dark Orange',
  },
  {
    id: 2,
    code: '#ff7c00',
    title: 'Orange',
  },
  {
    id: 'b',
    code: '#ff9f9c',
    title: 'Pale pink',
  },
  {
    id: 4,
    code: '#fffa00',
    title: 'Lemon yellow',
    isActive: true,
  },

  {
    id: 3,
    code: '#ffcf00',
    title: 'School bus yellow',
  },
  {
    id: 5,
    code: '#90e200',
    title: 'Green',
  },
  {
    id: 6,
    code: '#00ab00',
    title: 'Dark lime green',
  },
  {
    id: 7,
    code: '#00b2d4',
    title: 'Cyan',
  },
  {
    id: 8,
    code: '#0062c6',
    title: 'Blue',
  },

  {
    id: 9,
    code: '#8c20ba',
    title: 'Violet',
  },
  {
    id: 'a',
    code: '#f52394',
    title: 'Pink',
  },
  {
    id: 'c',
    code: '#fff',
    title: 'White',
  },
  {
    id: 'd',
    code: '#7c7c7c',
    title: 'Gray',
  },
  {
    id: 'e',
    code: '#000',
    title: 'Black',
  },
];

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['color-filter'],
  colors,
  setColors: '',

  actions: {
    setColor(color) {
      const { id } = color;
      const route = this.get('currentRoute').getRoute();
      route.transitionTo({
        queryParams: {
          colorCodes: id,
          page: 1,
        }
      });
    },
  },
});
