import {
  create,
  fillable,
  clickable,
  count,
  attribute
} from 'ember-cli-page-object';

export default create({
  searchString: fillable('.navbar-form.navbar-right input'),
  countItems: count('.flex-container .flex-item'),
  clickFirstItem: clickable('.flex-container .flex-item:first > a:first'),
  hrefFirstItem: attribute('href', '.flex-container .flex-item:first > a:first'),

});
