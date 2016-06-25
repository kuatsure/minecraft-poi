/*eslint 'space-in-parens': 'off'*/
/*eslint 'array-callback-return': 'off'*/

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('worlds', function() {
    this.route('new');
  });
  this.route('world', { path: 'world/:world_id' }, function() {
    this.route('edit');
    this.route('pois', function() {
      this.route('new');
    });
  });
});

export default Router;
