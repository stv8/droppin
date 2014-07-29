define([
  'jquery',     
  'underscore', 
  'backbone',
  'text!templates/header_tpl.html'    
], function($, _, Backbone, HeaderTpl){
  'use strict';

  var HeaderView = Backbone.View.extend({

  	el: '#body',

  	template: _.template(HeaderTpl),

    events: {
      'click #back-button': 'navBack'
    },

  	initialize: function(){
      this.delegateEvents();
  		this.render();
  	},

  	render: function(){
  		this.$el.append(this.template);
  		$('#body').trigger('create'); 
  		this.delegateEvents();
  	},

    navBack: function(e){
      window.history.back();
      console.log('nav back');
    }

  }); 	
  
  return HeaderView;
  
});