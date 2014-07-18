define([
  'jquery',     
  'underscore', 
  'backbone',
  'text!templates/upload_tpl.html',
  'models/spot_model',    
], function($, _, Backbone, UploadTpl, Spot){
  
  'use strict';

  var UploadView = Backbone.View.extend({

  	el: '#content',

  	template: _.template(UploadTpl),

    events: {
      'click #spot-upload-btn' : 'uploadSpot'
    },

  	initialize: function(){
  	},

  	render: function(){  
  		this.$el.html(this.template);
  		this.delegateEvents();
  	},

    uploadSpot: function() {      
      var spot = new Spot();
      var title = $('#spot-title').val();
      var type = $('#spot-type').val();
      
      spot.set({name: title, description: type});

      spot.save(null, {
        success: function(model, response) {
          console.log("Spot was successfully saved.");
          console.log("Spot name: " + model.get('name'));
        },
        error:  function(model, response) {
          console.log("Spot was not saved.");
        }
      });
    }

  }); 	
  
  return UploadView;
  
});