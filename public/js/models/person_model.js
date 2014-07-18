define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  var Person = Backbone.Model.extend({
    
    initialize: function(){
    	console.log('person created');
    }
    
  });
  // Return the model for the module
  return Person;
});
