app.controller('UploadCtrl', function($scope, Spot, Camera, $ionicLoading, Helpers) {

    $scope.spot = { name: " ", description: " ",
                    photo: { data: " ", filename: " ", content_type: "image/jpeg" } };

    $scope.uploadSpot = function() {
        $ionicLoading.show({
            template: 'Loading...'
        });

        Spot.save($scope.spot,
            function(response) {
                console.log(response);
                $ionicLoading.hide();
                Helpers.showAlert('Spot saved!');
                $scope.cleanUp();
            },
            function(response) {
                console.log(response);
                $ionicLoading.hide();
                Helpers.showAlert('Something went wrong.');
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

    // TODO find a different way to clean up the form
    $scope.cleanUp = function() {
        $scope.spot = { name: " ", description: " ",
            photo: { data: " ", filename: " ", content_type: "image/jpeg" } };
    }

});