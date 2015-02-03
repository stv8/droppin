app.controller('SpotsCtrl', function($scope, Spot) {

    $scope.spots = Spot.query();

});