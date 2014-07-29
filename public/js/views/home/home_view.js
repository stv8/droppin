define([
  'jquery',     
  'underscore', 
  'backbone',    
], function($, _, Backbone){
  
  'use strict';

  var HomeView = Backbone.View.extend({

  	el: '#content',

  	template: _.template('<h1>home view</h1>'),

  	initialize: function(){
  		this.render();
  	},

  	render: function(){
      this.$el.html(this.template);
  		this.delegateEvents();
  	}


  }); 	
  
  return HomeView;
  
});