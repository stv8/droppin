define([
  'underscore',
  'backbone',
  'models/spot_model'
], function(_, Backbone, Spot){
  var SpotCollection = Backbone.Collection.extend({
    
    url: 'api/v1/spots',

    model: Spot,

    initialize: function(){
    	console.log('spot collection created');
    }
  });
  
  // You don't usually return a collection instantiated
  return SpotCollection;
});
