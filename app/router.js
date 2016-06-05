/*eslint 'space-in-parens': 'off'*/
/*eslint 'array-callback-return': 'off'*/
/*eslint 'no-empty-function': 'off'*/

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

export default Router;
