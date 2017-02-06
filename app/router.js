/*eslint 'array-callback-return': 'off'*/

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map( function() {
  this.route( 'worlds', function() {
    this.route( 'new' );
  });
  this.route( 'world', { path: 'world/:world_id' }, function() {
    this.route( 'edit' );
    this.route( 'pois', function() {
      this.route( 'new' );
    });
    this.route( 'poi', { path: 'poi/:poi_id' }, function() {
      this.route( 'edit' );
    });
  });
});

export default Router;
