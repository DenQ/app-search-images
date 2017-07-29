import {
  create,
  visitable,
  fillable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  searchString: fillable('.navbar-form.navbar-right input'),
  submit: clickable('.navbar-form.navbar-right button'),
});
