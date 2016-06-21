import Ember from 'ember';

export default Ember.Route.extend({
  setupController( controller, model ) {
    this._super( controller, model );

    controller.set( 'editName', model.get( 'name' ) );
  },

  actions: {
    cancelEditWorld() {
      window.history.back();
    },

    destroyWorld() {
      const m = this.currentModel;

      m.destroyRecord().then( () => {
        this.transitionTo( 'worlds' );
      });
    },

    submitEditWorld() {
      const m = this.currentModel;

      m.set( 'name', this.get( 'controller.editName' ) );

      m.save().then( response => {
        this.transitionTo( 'world', response );
      });
    }
  }
});
