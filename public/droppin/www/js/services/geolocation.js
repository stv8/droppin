app.factory('Geolocation', ['$rootScope', '$q', '$cordovaGeolocation', function($rootScope, $q, $cordovaGeolocation) {
    return {
        getLocation: function (options) {

            // init $q
            var deferred = $q.defer();

            document.addEventListener("deviceready", function () {

                var options = { timeout: 5000, enableHighAccuracy: false };

                $cordovaGeolocation.getCurrentPosition(options)
                    .then(function (position) {
                        console.log("success in geolocation");
                        deferred.resolve(position);
                    }, function(error) {
                        // error
                        console.log("error in geolocation: " + error);
                        deferred.reject(error);
                    });
            }, false);

            //return a promise
            return deferred.promise;
        }
    }
}]);
