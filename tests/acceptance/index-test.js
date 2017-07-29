import { test } from 'qunit';
import moduleForAcceptance from 'app-search-images/tests/helpers/module-for-acceptance';
import page from '../page-objects/index';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('searching from index page', function(assert) {
  const searchString = 'sun'
  page
    .visit()
    .searchString(searchString)
    .submit();

  andThen(function() {
    assert.equal(currentURL(), `/search/${searchString}`);
  });
});
