define([
  'jquery',     
  'underscore', 
  'backbone',
  'google',
  'text!templates/map_tpl.html'    
], function($, _, Backbone, google, MapTpl){
  
  'use strict';

  var MapView = Backbone.View.extend({

  	el: '#content',

    initialize: function(){
      
    },

    render: function(){

      //loads html into #content
      this.$el.html(MapTpl);

      var mapCanvas = $("#map_canvas")[0];
      console.log('map canvas: ' + mapCanvas);

      try{
          google.addMapToCanvas(mapCanvas);
      }catch(err){
          console.log(err);
      }

    }

  }); 	
  
  return MapView;
  
});