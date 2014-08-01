define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  var User = Backbone.Model.extend({
    
    url: "api/v1/users",

    defaults: {
      "email": "",
      "password": ""
    },

    initialize: function(){
    }
    
  });
  // Return the model for the module
  return User;
});
