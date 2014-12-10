app.controller('UploadCtrl', function($scope, Spot, Camera) {

    $scope.spot = { name: " ", description: " ", photo: { data: " ", filename: " ", content_type: "image/jpeg" } };

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
            $scope.spot.photo.data = imageData;
        })
        .catch(function(error) {
            console.log(error);
        })
    };

});