import { test } from 'qunit';
import moduleForAcceptance from 'app-search-images/tests/helpers/module-for-acceptance';
import pageIndex from '../page-objects/index';
import pageSearch from '../page-objects/search';

moduleForAcceptance('Acceptance | search');

const searchString = 'sun';

test('searching from index page', function(assert) {
  let urlCard = '';
  pageIndex
    .visit()
    .searchString(searchString)
    .submit();

  andThen(() => {
    assert.equal(currentURL(), `/search/${searchString}`);
    assert.equal(pageSearch.countItems > 0, true)

    urlCard = pageSearch.hrefFirstItem;
    pageSearch.clickFirstItem();

  });

  andThen(()=> {
    assert.equal(currentURL(), urlCard);
  });
});
