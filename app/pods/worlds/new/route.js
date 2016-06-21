import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord( 'world' );
  },

  actions: {
    cancelNewWorld() {
      this.transitionTo( 'worlds' );
    },

    submitNewWorld() {
      const world = this.currentModel;

      world.set( 'name', `${ this.get( 'controller.name' ) }` );

      // Time to save the world! haha :)
      world.save().then( response => {
        this.transitionTo( 'world', response );
      });
    }
  }
});
