app.controller('SpotDetailCtrl', function($scope, Spot, $stateParams) {

    $scope.spot = Spot.get({id: $stateParams.id});
});