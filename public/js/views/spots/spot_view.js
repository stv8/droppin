define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/spot_tpl.html',
  'views/profile/friends_view',
], function($, _, Backbone, SpotTemplate, FriendsView){

  'use strict';

  var SpotView = Backbone.View.extend({

    el: '#content',

    events: {
      'click #share-button': 'shareSpot'
    },

    initialize: function() {
    },
    
    render: function(){    
      var tpl = _.template(SpotTemplate, this.model.attributes);
      this.$el.html(tpl);
      this.delegateEvents();
    },

    shareSpot: function(){
      console.log('share spot');
      new FriendsView;
    }
  });
  
  return SpotView;
});
