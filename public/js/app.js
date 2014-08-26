define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/login_view',
  'views/shared/footer_view',
  'views/shared/header_view',
  'models/session_model'
], function($, _, Backbone, Router, LoginView, FooterView, HeaderView, Session){

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
            var session = new Session();
            new LoginView({model: session});
        }
    });

    return AppView;
});
