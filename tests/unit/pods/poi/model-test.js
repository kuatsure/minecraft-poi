import { moduleForModel, test } from 'ember-qunit';

moduleForModel('poi', 'Unit | Model | poi', {
  // Specify the other units that are required for this test.
  needs: ['model:world']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
