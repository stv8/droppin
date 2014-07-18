define([
  'jquery',
  'underscore',
  'backbone',
  'views/spot_view',
  'views/spotlist_view',
  'views/upload_view',
  'views/profile_view',
  'views/map_view',
  'views/home_view',
  'models/spot_model',
  'views/friends_view',
], function($, _, Backbone, SpotView, SpotListView, UploadView, ProfileView, MapView, HomeView, Spot, FriendsView){
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
        var view = new SpotListView; //pass in collection
        this.render(view);
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
