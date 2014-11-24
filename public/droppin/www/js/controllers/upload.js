app.controller('UploadCtrl', function($scope, Spot) {

    $scope.spot = { name: " ", description: " " }

    $scope.uploadSpot = function() {
        Spot.save(
            { spot: $scope.spot },
        function(response) {
            console.log(response);
        },
        function(response) {
            console.log(response);
        });
    }

});