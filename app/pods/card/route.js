import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    const { card } = model;
    return card.get('title._content');
  },
  breadCrumb: {
    title: 'Card',
  },

  model(params) {
    const { id } = params;

    const card = this.store.queryRecord('photo', {
      // sort: 'relevance',
      content_type: 7,
      format: 'json',
      nojsoncallback: 1,
      photo_id: id,
      method: 'flickr.photos.getInfo',
      api_key: 'bf041bd78a382f2b6600956a65239c28',
      extras:  'sizes,icon_urls,ignored,rev_ignored,rev_contacts,venue,datecreate,can_addmeta,can_comment,can_download,can_share,contact,count_comments,count_faves,count_views,date_taken,date_upload,description,icon_urls_deep,isfavorite,ispro,license,media,needs_interstitial,owner_name,owner_datecreate,path_alias,realname,rotation,safety_level,secret_k,secret_h,url_c,url_f,url_h,url_k,url_l,url_m,url_n,url_o,url_q,url_s,url_sq,url_t,url_z,visibility,visibility_source,o_dims,is_marketplace_printable,is_marketplace_licensable,publiceditability,static_maps',
    });

    return Ember.RSVP.hash({
      card,
    });
  },

});
