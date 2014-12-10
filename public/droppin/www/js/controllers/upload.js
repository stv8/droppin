app.controller('UploadCtrl', function($scope, Spot, Camera) {

    $scope.spot = { name: " ", description: " " }

    $scope.uploadSpot = function() {
        Spot.save($scope.spot,
        function(response) {
            console.log(response);
        },
        function(response) {
            console.log(response);
        });
    };

    $scope.takePicture = function() {
        Camera.getPicture().then(function(imageData) {
            $scope.picSrc = "data:image/jpeg;base64," + imageData;
            console.log($scope.picSrc);
        })
        .catch(function(error) {
            console.log(error);
        })
    };

});