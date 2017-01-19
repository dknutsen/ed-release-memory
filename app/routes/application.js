import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      items: this.store.peekAll('item'),
      groups: this.store.peekAll('group'),
      subgroups: this.store.peekAll('subgroup'),
      pricedata: this.store.peekAll('pricedatum'),
    });
  },


  actions: {
    loadRecords: function(){
      this.store.findAll('group');
      this.store.findAll('subgroup');
      this.store.findAll('item');
      this.store.findAll('pricedatum');
    },
    unloadRecords: function(){
      this.store.unloadAll();
    },
    unloadItems: function(){
      this.store.unloadAll('item');
    },
    unloadGroups: function(){
      this.store.unloadAll('group');
    },
    unloadSubgroups: function(){
      this.store.unloadAll('subgroup');
    },
    unloadPricedata: function(){
      this.store.unloadAll('pricedatum');
    },

    severAndUnload: function(){
      this.store.peekAll('item').forEach(function(item){
        item.set('subgroup', null);
        item.save();
      });
      Ember.run.later(this, function(){
        this.store.unloadAll('pricedatum');
        this.store.unloadAll('item');
      }, 1500);
    },
  }
});

