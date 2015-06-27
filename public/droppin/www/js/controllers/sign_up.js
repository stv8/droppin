app.controller('SignUpCtrl', function($scope, $state, Registration, Helpers, CurrentUser) {

    Helpers.redirect_if_authenticated();

    $scope.signup = { email: "", password: "" }; // TODO password_confirmation: ""

    $scope.signUp = function() {
        Helpers.show_loading();

        Registration.save(
            $scope.signup,
            function(response) {
                Helpers.hide_loading();
                var user = response.user;
                CurrentUser.store(user.authentication_token, user.email);
                $state.go('tab.spots');
            },
            function(response) {
                Helpers.ajax_error_handling(response);
            }
        );
    };

    $scope.go_to_sign_in = function() {
        $state.go('welcome');
    };
});
