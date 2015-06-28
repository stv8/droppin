app.controller('WelcomeCtrl', function($scope, $state, Helpers, Session, Registration, CurrentUser, $ionicPopup) {
    Helpers.redirect_if_authenticated();

    // if login is true, show login form
    // if login is false, show register form
    $scope.login = true;

    $scope.credentials = {};

    $scope.toggleLogin = function() {
        $scope.login = !$scope.login;
    };

    $scope.returnToWelcome = function() {
        $state.go('welcome');
    };

    $scope.submit = function() {
        console.log($scope.login);
        Helpers.show_loading();
        if($scope.login) {
            Session.save({ session: $scope.credentials }, success, error);
        } else {
            Registration.save($scope.credentials, success, error);
        }
    };

    function success(response) {
        Helpers.hide_loading();
        var user = response.user;
        CurrentUser.store(user.authentication_token, user.email);
        $state.go('tab.spots');
    }

    function error(response) {
        Helpers.hide_loading();
        // Helpers.ajax_error_handling(response);
        var alertPopup = $ionicPopup.alert({
            title: 'Login failed!',
            template: 'Please check your credentials!'
        });
    }
});
