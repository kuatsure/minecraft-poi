import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr( 'string' ),
  xCoord: attr( 'number' ),
  yCoord: attr( 'number' ),
  zCoord: attr( 'number' ),
  world: belongsTo( 'world' )
});
