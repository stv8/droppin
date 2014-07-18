define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  var Spot = Backbone.Model.extend({
    
    urlRoot: 'api/v1/spots',

    initialize: function(){
    	console.log('spot created');
    }
    
  });
  // Return the model for the module
  return Spot;
});
