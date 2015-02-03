app.controller('WelcomeCtrl', function($scope, $state, Helpers, Session, CurrentUser) {
    //Helpers.redirect_if_authenticated()

    Helpers.redirect_if_authenticated()

    $scope.signin = { email: "", password: ""}

    $scope.returnToWelcome = function() {
        $state.go('welcome');
    }

    $scope.signIn = function() {
        Helpers.show_loading();

        Session.save(
            { session: $scope.signin },
            function(response) {
                Helpers.hide_loading();
                var user = response.user;
                CurrentUser.store(user.authentication_token, user.email);
                $state.go('tab.spots');
            },
            function(response) {
                Helpers.ajax_error_handling(response);
            }
        )
    }

    $scope.go_to_sign_up = function() {
        $state.go('sign_up');
    }
})