define([
  'jquery',     
  'underscore', 
  'backbone'    
], function($, _, Backbone){
  
  var Session = Backbone.Model.extend({

  	url: 'api/v1/users/sign_in',

  	defaults: {
  		"email": "",
  		"password": ""
  	}

  });
  return Session;
});
