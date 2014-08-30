define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login_tpl.html',
    'views/shared/footer_view',
    'views/shared/header_view',
    'views/home/home_view',
    'models/user_model',
    'models/registration_model',
    'models/session_model'
], function($, _, Backbone, LoginTpl, FooterView, HeaderView, HomeView, User, Registration, Session) {
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
            this.model.fetch();
            this.render();
        },

        logIn: function(e) {
            var self = this;
            var email = this.$('#email').val();
            var password = this.$('#password').val();

            this.model.set({email: email, password: password});
            this.model.save(null, {
                success: function(model, response) {
                    console.log(JSON.stringify(response));


                    self.undelegateEvents();

                    new HomeView;
                    new FooterView;
                    new HeaderView;
                },
                error: function(model, response) {
                    console.log("log in failed ");
                    self.$('.login-form .error').html('Invalid username or password. Please try again.').show();
                    self.$('.login-form button').removeAttr('disabled');
                }
            });

            this.$('.login-form button').attr('disabled', 'disabled');

            return false;
        },

        signUp: function(e) {
            var self = this;
            var email = this.$('#email').val();
            var password = this.$('#password').val();

            var registration = new Registration({
                "email": email,
                "password": password
            });

            registration.save(null, {
                success: function(model, response) {
                    console.log("successful registration " + model.toJSON());

                    self.undelegateEvents();

                    new HomeView;
                    new FooterView;
                    new HeaderView;
                },
                error: function(model, response) {
                    console.log("unsuccessful registration");
                    self.$('.login-form .error').html(error.message).show();
                    self.$('.login-form button').removeAttr('disabled');
                }
            });

            this.$('.login-form button').attr('disabled', 'disabled');

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
