/*eslint 'space-in-parens': 'off'*/

import Ember from 'ember';

export default function destroyApp(application) {
  Ember.run(application, 'destroy');
}
