define([
  'jquery',     
  'underscore', 
  'backbone',
  'text!templates/footer_tpl.html'    
], function($, _, Backbone, FooterTpl){
  'use strict';

  var FooterView = Backbone.View.extend({

  	el: '#body',

  	template: _.template(FooterTpl),

    events: {
      'click .nav-button': 'navigate'
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

    navigate: function(source) {
      var hrefRslt = source.target.getAttribute('href');
      console.log('navbar navigate ' + hrefRslt);
      Backbone.history.navigate(hrefRslt, {trigger:true});
      //Cancel the regular event handling so that we won't actual change URLs
      //We are letting Backbone handle routing
      return false;
    }
	
  }); 	
  
  return FooterView;
  
});	