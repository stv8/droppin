define([
  'jquery',
  'underscore',
  'backbone',
  'collections/spot_collection',
  'text!templates/spotlist_tpl.html',
  'models/spot_model',
], function($, _, Backbone, SpotCollection, SpotListTpl, SpotModel){
  
  'use strict';

  var SpotListView = Backbone.View.extend({

    el: '#content',

    template: _.template(SpotListTpl),

    initialize: function(){
      
    },

    events: {
      'click .spot': 'goToSpot'
    }, 

    render: function() {
      console.log(this.collection.toJSON());
      this.$el.html(this.template({spots: this.collection.toJSON()}));
      this.$el.trigger("create");
    },

    goToSpot: function(source) {
        var hrefRslt = source.target.getAttribute('href');
        console.log('goToSpot');
        Backbone.history.navigate(hrefRslt, {trigger:true});
        //Cancel the regular event handling so that we won't actual change URLs
        //We are letting Backbone handle routing
        return false;
    }

  });

  return SpotListView;
});
