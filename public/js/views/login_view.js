define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login_tpl.html',
    'views/shared/footer_view',
    'views/shared/header_view',
    'views/home/home_view',
    'models/user_model',
    'models/registration_model'
], function($, _, Backbone, LoginTpl, FooterView, HeaderView, HomeView, User, Registration) {
    'use strict';

    var LoginView = Backbone.View.extend({
        
        template: _.template(LoginTpl),

        events: {
            'click #login-btn': 'logIn',
            'click #signup-btn': 'signUp'
        },

        el: '#content',

        initialize: function() {
            _.bindAll(this, 'logIn', 'signUp');
            this.render();
        },

        logIn: function(e) {
            var self = this;
            var username = this.$('#username').val();
            var password = this.$('#password').val();

            // Parse.User.logIn(username, password, {
            //     success: function(user) {
            //         alert('Login Success!');
                    
            //         //delete self
            //         self.undelegateEvents();

            //         new HomeView;
            //         new FooterView;
            //         new HeaderView;
            //     },

            //     error: function(user, error) {
            //         self.$('.login-form .error').html('Invalid username or password. Please try again.').show();
            //         self.$('.login-form button').removeAttr('disabled');
            //     }
            // });

            // this.$('.login-form button').attr('disabled', 'disabled');

            return false;
        },

        signUp: function(e) {
            var self = this;
            var username = this.$('#username').val();
            var password = this.$('#password').val();

            var registration = new Registration({
                "email": username,
                "password": password
            });

            registration.save(null, {
                success: function(model, response) {
                    console.log("successful registration " + model.toJSON());
                },
                error: function(model, response) {
                    console.log("unsuccessful registration");
                }
            });

            // Parse.User.signUp(username, password, {
            //     ACL: new Parse.ACL()
            // }, {
            //     success: function(user) {
            //         alert('Signup Success!');

            //         //user model is used for user search
            //         var user = new user();
            //         user.set("username", user.get('username'));
            //         user.save(null, {
            //             success: function(user) {
            //                 console.log('user saved with username:' + user.get('username'));
            //             },

            //             error: function(error) {
            //                 console.log('failed to save user');
            //             }
            //         });
                    
            //         //delete self
            //         self.undelegateEvents();
                    
            //         //kick off the app views
            //         new HomeView;
            //         new FooterView;
            //         new HeaderView;

            //     },

            //     error: function(user, error) {
            //         self.$('.login-form .error').html(error.message).show();
            //         self.$('.login-form button').removeAttr('disabled');
            //     }
            // });

            // this.$('.login-form button').attr('disabled', 'disabled');

            return false;
        },

        render: function() {
            this.$el.html(this.template);
            $('#content').trigger('create'); 
            this.delegateEvents();
        }
    });

    return LoginView;
});