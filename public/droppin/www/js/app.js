var app = angular.module('droppin', ['ionic', 'ngResource', 'LocalStorageModule', 'ngCordova']);

app.run(function($ionicPlatform, $rootScope, $state, CurrentUser) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeStart', function(e, to) {
    if(to.data && to.data.requiresLogin){
      if(!CurrentUser.isAuthenticated()) {
        e.preventDefault();
        console.log("Access denied.");
        $state.go('welcome');
      }
    }
  });
});

app.constant('Host', 'http://localhost:3000')

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('welcome', {
        url: "/welcome",
        controller: 'WelcomeCtrl',
        templateUrl: "templates/welcome.html",
        data: {
          requiresLogin: false
        }
      })

      .state('sign_up', {
        url: "/sign_up",
        controller: "SignUpCtrl",
        templateUrl: "templates/sign_up.html",
        data: {
          requiresLogin: false
        }
      })

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })


    // Each tab has its own nav history stack:

      .state('tab.spots', {
        url: '/spots',
        views: {
          'tab-spots': {
            templateUrl: 'templates/tab-spots.html',
            controller: 'SpotsCtrl'
          }
        },
        data: {
          requiresLogin: true
        }
      })

      .state('tab.spot-detail', {
        url: '/spots/:id',
        views: {
          'tab-spots': {
            templateUrl: 'templates/spot-detail.html',
            controller: 'SpotDetailCtrl'
          }
        },
        data: {
          requiresLogin: true
        }
      })

      .state('tab.upload', {
        url: '/upload',
        views: {
          'tab-upload': {
            templateUrl: 'templates/tab-upload.html',
            controller: 'UploadCtrl'
          }
        },
        date: {
          requiresLogin: true
        }
      })

      .state('tab.friends', {
        url: '/friends',
        views: {
          'tab-friends': {
            templateUrl: 'templates/tab-friends.html',
            controller: 'FriendsCtrl'
          }
        },
        date: {
          requiresLogin: true
        }
      })

      .state('tab.friend-detail', {
        url: '/friends/:friendId',
        views: {
          'tab-friends': {
            templateUrl: 'templates/friend-detail.html',
            controller: 'FriendDetailCtrl'
          }
        },
        date: {
          requiresLogin: true
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        },
        date: {
          requiresLogin: true
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');

});

