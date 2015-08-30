app.controller('SpotsCtrl', function($scope, Spot) {

    $scope.spots = Spot.query();

    $scope.gridView = false;

    $scope.toggleGrid = function() {
        $scope.gridView = !$scope.gridView;
    };

});
