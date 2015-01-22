app.controller('UploadCtrl', function($scope, Spot, Camera, $ionicLoading, Helpers, Geolocation, $cacheFactory) {

    $scope.spot = { name: null,
                    description: null,
                    photo: { data: null, filename: null, content_type: "image/jpeg" },
                    spot_type: null,
                    lat: null,
                    lon: null
                  };

    $scope.uploadSpot = function() {
        $ionicLoading.show({
            template: 'Saving Spot...'
        });

        Geolocation.getLocation()
            .then(function (position) {
                $scope.spot.lat = position.coords.latitude;
                $scope.spot.lon = position.coords.longitude;
                console.log("get location success");
            }, function(error) {
                console.log("error in get location " + error);
            }).finally(function() {
                // TODO possible refactor, not sure if I want Spot.save() in finally block
                Spot.save($scope.spot,
                    function(response) {
                        // bust the cache
                        var $httpCache = $cacheFactory.get('$http');
                        $httpCache.removeAll();

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


    // used for fancy select
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

    // used for fancy select
    $scope.spot_types_text = 'Spot Type';
    $scope.val =  {single: null, multiple: null};

    // TODO find a different way to clean up the form
    $scope.cleanUp = function() {
        $scope.spot = { name: null,
                        description: null,
                        photo: { data: null, filename: null, content_type: "image/jpeg" },
                        lat: null,
                        lon: null
                      };
    }

});
