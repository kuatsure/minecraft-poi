import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord( 'poi' );
  },

  setupController( controller, model ) {
    this._super( controller, model );

    model.set( 'world', this.modelFor( 'world' ) );
  },

  actions: {
    cancelNewPoi() {
      this.transitionTo( 'world.pois' );
    },

    submitNewPoi() {
      const poi = this.currentModel;

      poi.save().then( response => {
        const world = this.modelFor( 'world' );

        world.get( 'pois' ).pushObject( response );

        world.save().then( () => {
          this.transitionTo( 'world.pois' );
        });
      });
    }
  }

});
