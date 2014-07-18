define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/login_view',
  'views/footer_view',
  'views/header_view',
], function($, _, Backbone, Router, LoginView, FooterView, HeaderView){
 
 'use strict';
  
 var AppView = Backbone.View.extend({

        el: '#container',

        initialize: function() {
            this.render();
        },

        render: function() {
            // if (Parse.User.current()) {
            //     console.log('logged in');
            //     new FooterView;
            //     new HeaderView;
            // } else {
            //     console.log('login view');
            //     new LoginView;
            // }
            new FooterView;
            new HeaderView;
        }
    });

    return AppView;
});