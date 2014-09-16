// Require.js allows us to configure shortcut alias
require.config({

    shim: {

        backbone: {
            //These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },

        underscore: {
            exports: '_'
        },

        google: {
            deps:['jquery']
        },

        text: {
            exports: 'text'
        },

        'jquery.mobile': ['jquery'],

    },


	paths: {
    	jquery: 	        'libs/jquery/jquery',
      'jquery.mobile':  'libs/jquery/jquery.mobile-1.4.1.min',
    	underscore:       'libs/underscore/underscore',
    	backbone: 	      'libs/backbone/backbone',
    	templates: 	      '../templates/',
      domReady:         'libs/require/domReady',
      google:           'libs/google',
      async:            'libs/async/async'
  	}
});


require([
    'backbone',
    'router',
    'app',
    'jquery.mobile',
    'google',
    'models/session_model'
], function(Backbone, Router, AppView, JQMobile, google) {
    window.Droppin = window.Droppin || {};

    // overide backbone.sync
    Backbone._sync = Backbone.sync;

    Backbone.sync = function(method, model, options) {
      if (!options.noCSRF) {
        var beforeSend = options.beforeSend;

        // Set X-CSRF-Token HTTP header
        options.beforeSend = function(xhr) {
          var token = Droppin.csrfToken;
          if (token) xhr.setRequestHeader('X-CSRF-Token', token);

          // this will include session information in the requests
          xhr.withCredentials = true;

          if (beforeSend) return beforeSend.apply(this, arguments);
        };
      }

      var complete = options.complete;
      options.complete = function(jqXHR, textStatus) {

         // If response includes CSRF token we need to remember it
         var token = jqXHR.getResponseHeader('X-CSRF-Token')
         if (token) Droppin.csrfToken = token;

         model.trigger('sync:end');
         if (complete) complete(jqXHR, textStatus);
      };

      // Serialize data, optionally using paramRoot
      if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
        options.contentType = 'application/json';
        data = JSON.stringify(options.attrs || model.toJSON(options));
        if (model.paramRoot) {
          data = {};
          data[model.paramRoot] = model.toJSON(options);
        } else {
          data = model.toJSON();
        }
        options.data = JSON.stringify(data);
      }

      return Backbone._sync(method, model, options);
    };


    Backbone.history.start({pushState: true});
    new AppView();
    new Router();

});
