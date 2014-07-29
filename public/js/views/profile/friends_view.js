define([
  'jquery',     
  'underscore', 
  'backbone',
  'text!templates/friends_tpl.html',
], function($, _, Backbone, FriendsTpl){
  
  'use strict';

   var FriendsView = Backbone.View.extend({
  	
  	el: '#content',

  	initialize: function(){
  		console.log('friends view');
  		this.render();
  	},

  	render: function(){
  		this.$el.html(FriendsTpl);
  	}

  });

  return FriendsView;
  
});
