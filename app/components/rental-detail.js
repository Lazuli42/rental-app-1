import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(rental){
      if (confirm('Are you sure you want to rid the world of this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }

});
