define([
  'jquery',     
  'underscore', 
  'backbone'    
], function($, _, Backbone){
  
  var PasswordRecovery = Backbone.Model.extend({

  	url: 'api/v1/users/password.json',

    defaults: {
      "email": ""
    }
  });
  return PasswordRecovery;
});
