import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyPoi() {
      const m = this.modelFor( 'world.poi' );
      const w = this.modelFor( 'world' );

      m.destroyRecord().then( () => {
        w.save().then( response => {
          this.transitionTo( 'world.pois', response );
        });
      });
    },

    cancelEditPoi() {
      this.transitionTo( 'world.pois' );
    },

    submitEditPoi() {
      const poi = this.modelFor( 'world.poi' );

      poi.save().then( () => {
        this.transitionTo( 'world.pois' );
      });
    }
  }
});
