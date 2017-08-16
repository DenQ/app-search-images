import Ember from 'ember';
import config from 'app-search-images/config/environment';

const API_KEY = config.flickr.key;

function getCriteria(obj) {
  return Ember.assign({}, {
    nojsoncallback: 1,
    api_key: API_KEY,
    content_type: 7,
    format: 'json',
  }, obj);
}

export default Ember.Service.extend({
  store: Ember.inject.service(),

  searchItem(meta = {}) {
    const { searchString, page, perPage } = meta;
    const criteria = getCriteria({
      sort: 'relevance',
      per_page: perPage,
      text: searchString,
      page,
      color_codes: 0,
      view_all: 1,
      method: 'flickr.photos.search',
      extras: 'can_comment,count_comments,count_faves,description,isfavorite,license,media,needs_interstitial,owner_name,path_alias,realname,rotation,url_c,url_l,url_m,url_n,url_q,url_s,url_sq,url_t,url_z',
    });
    return this.get('store').query('searchItem', criteria);
  },

  // @todo rename method like - getCard
  searchCard(id) {
    const criteria = getCriteria({
      sort: 'relevance',
      photo_id: id,
      method: 'flickr.photos.getInfo',
      extras:  'sizes,icon_urls,ignored,rev_ignored,rev_contacts,venue,datecreate,can_addmeta,can_comment,can_download,can_share,contact,count_comments,count_faves,count_views,date_taken,date_upload,description,icon_urls_deep,isfavorite,ispro,license,media,needs_interstitial,owner_name,owner_datecreate,path_alias,realname,rotation,safety_level,secret_k,secret_h,url_c,url_f,url_h,url_k,url_l,url_m,url_n,url_o,url_q,url_s,url_sq,url_t,url_z,visibility,visibility_source,o_dims,is_marketplace_printable,is_marketplace_licensable,publiceditability,static_maps',
    });
    return this.get('store').queryRecord('photo', criteria);
  },

  // @todo rename method like - getComments
  searchComments(id) {
    const criteria = getCriteria({
      photo_id: id,
      method: 'flickr.photos.comments.getList',
    });
    return this.get('store').query('comment', criteria);
  },

});
