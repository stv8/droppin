define([
  'underscore',
  'backbone',
  'models/spot_model'
], function(_, Backbone, Spot){

  var SpotCollection = Backbone.Collection.extend({
    
    model: Spot,

    initialize: function(){
    	console.log('spot list created');
    }
  });
  
  // You don't usually return a collection instantiated
  return SpotCollection;
});
