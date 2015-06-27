app.controller('AccountCtrl', function($scope, CurrentUser) {

    $scope.signOut = function() {
        CurrentUser.sign_out();
    };
});
