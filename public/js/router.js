define([
  'jquery',
  'underscore',
  'backbone',
  'views/spots/spot_view',
  'views/spots/spotlist_view',
  'views/spots/upload_view',
  'views/profile/profile_view',
  'views/map_view',
  'views/home/home_view',
  'models/spot_model',
  'views/profile/friends_view',
  'collections/spot_collection',
], function($, _, Backbone, SpotView, SpotListView, UploadView, ProfileView, MapView, HomeView, Spot, FriendsView, SpotCollection){
  var Router = Backbone.Router.extend({

    initialize: function(){
    },
  

    routes: {

      ''          : 'home',
      'home'      : 'home',
      'spot/:id'  : 'showSpot',
      'spotlist'  : 'showSpotList', 
      'upload'    : 'upload',
      'profile'   : 'profile',
      'map'       : 'map',  

    },

      home: function(){
        console.log('home view');
        var view = new HomeView;
        this.render(view);
      },

      showSpot: function(id){
        var self = this;
        var spot = new Spot({id: id});

        spot.fetch({
          success: function(spot){
            var view = new SpotView({model: spot});
            self.render(view);
            $('#back-button').show();
          },
          error: function(spot){
            console.log("Spot fetch was unsucessful in showSpot.");
          }
        });
        console.log('spot view spot id: ' + id);

      },

      showSpotList: function(){
        console.log('spot list view');
        var spots = new SpotCollection();
        var that = this;
        
        spots.fetch({
          success: function(spots) {
            console.log("Spot collection fetch was successful in showSpotList.");
            var view = new SpotListView({collection: spots}); //pass in collection
            that.render(view);
          },
          error: function() {
            console.lot("Spot collection fetch was unsucessful in showSpotList.");
          }
        });
      },

      upload: function(){
        console.log('upload view');
        var view = new UploadView;
        this.render(view);
      },

      profile: function(){
        console.log('profile view');
        var view = new ProfileView;
        this.render(view);
      },

      map: function(){
        console.log('map view');
        var view = new MapView;
        this.render(view);
      },


      render: function(view) {
        //close current view
        if(this.currentView) {
          this.currentView.undelegateEvents();
          this.currentView.$el.removeData().unbind(); 
        }

        //Atm only need back button for spot view
        if(view !== Spot){
          $('#back-button').hide();
        }
        view.render();

        this.currentView = view;
        return this;
      }

    
  });


  return Router;
});
