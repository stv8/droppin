app.controller('UploadCtrl', function($scope, Spot) {

    $scope.spot = { name: " ", description: " " }

    $scope.uploadSpot = function() {
        Spot.save($scope.spot,
        function(response) {
            console.log(response);
        },
        function(response) {
            console.log(response);
        });
    }

});