define([
  'jquery',     
  'underscore', 
  'backbone',
  'text!templates/profile_tpl.html',
  'views/profile/searchUsers_view'    
], function($, _, Backbone, ProfileTpl, SearchUsersView){
  
  'use strict';

  var ProfileView = Backbone.View.extend({

  	el: '#content',

  	template: _.template(ProfileTpl),

    events: {
      'click #logout'       : 'logout',
      'click #search-users' : 'searchUsers'
    },

  	initialize: function(){
  		this.render();
  	},

  	render: function(){
  		this.$el.html("<h1>profile view</h1>");
  		this.delegateEvents();
  	},

    logout: function(){
      window.location.reload();
    },

    searchUsers: function(){
      new SearchUsersView;
    }


  }); 	
  
  return ProfileView;
  
});