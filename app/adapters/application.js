import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  updateRecord: function(){
    return Ember.RSVP.resolve();
  }
});
