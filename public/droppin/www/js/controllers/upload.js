app.controller('UploadCtrl', function($scope, Spot, Camera, $ionicLoading, Helpers, $cordovaGeolocation) {

    $scope.spot = { name: null,
                    description: null,
                    photo: { data: null, filename: null, content_type: "image/jpeg" },
                    spot_type: null,
                    lat: null,
                    lon: null
                  };

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

            // TODO refactor geo coordinates and prevent save until location
            var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var lat  = position.coords.latitude;
                    var long = position.coords.longitude;

                    $scope.spot.lat = lat;
                    $scope.spot.lon = long;

                    console.log("success in geolocation");
                }, function(err) {
                    // error
                    console.log("error in geolocation");
                });

        })
        .catch(function(error) {
            console.log(error);
        })
    };

    $scope.spot_types = [
        {id: 1, text: 'Handrail',   checked: false, icon: null},
        {id: 2, text: 'Hubba',      checked: false, icon: null},
        {id: 3, text: 'Gap',        checked: false, icon: null},
        {id: 4, text: 'Stairs',     checked: false, icon: null},
        {id: 5, text: 'Ledge',      checked: false, icon: null},
        {id: 6, text: 'Flatbar',    checked: false, icon: null},
        {id: 7, text: 'Bank',       checked: false, icon: null},
        {id: 8, text: 'Transition', checked: false, icon: null},
        {id: 9, text: 'Manual Pad', checked: false, icon: null},
        {id: 10, text: 'Other',     checked: false, icon: null}
    ];

    $scope.spot_types_text = 'Spot Type';
    $scope.val =  {single: null, multiple: null};

    // TODO find a different way to clean up the form
    $scope.cleanUp = function() {
        $scope.spot = { name: null, description: null,
            photo: { data: null, filename: null, content_type: "image/jpeg" } };
    }

});
