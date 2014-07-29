define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login_tpl.html',
    'views/shared/footer_view',
    'views/shared/header_view',
    'views/home/home_view',
    'models/person_model',
], function($, _, Backbone, LoginTpl, FooterView, HeaderView, HomeView, Person) {
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
            // var self = this;
            // var username = this.$('#username').val();
            // var password = this.$('#password').val();

            // Parse.User.signUp(username, password, {
            //     ACL: new Parse.ACL()
            // }, {
            //     success: function(user) {
            //         alert('Signup Success!');

            //         //person model is used for user search
            //         var person = new Person();
            //         person.set("username", user.get('username'));
            //         person.save(null, {
            //             success: function(person) {
            //                 console.log('person saved with username:' + person.get('username'));
            //             },

            //             error: function(error) {
            //                 console.log('failed to save person');
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