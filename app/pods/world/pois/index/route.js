import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor( 'world' ).get( 'pois' );
    // return this.store.query( 'poi', { world: this.modelFor( 'world' ).get( 'id' ) });
  },

  setupController( controller, model ) {
    this._super( controller, model );

    controller.set( 'world', this.modelFor( 'world' ) );
  }
});
