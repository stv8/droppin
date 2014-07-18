// Require.js allows us to configure shortcut alias
'use strict';

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
    	jquery: 	      'libs/jquery/jquery',
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
    'google'
], function(Backbone, Router, AppView, JQMobile, google) {
    Backbone.history.start();
    new AppView();
    new Router();

});
