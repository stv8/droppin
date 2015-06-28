app.factory('Camera', ['$rootScope', '$q', '$cordovaCamera', function($rootScope, $q, $cordovaCamera) {
    return {
        getPicture: function (options) {

            var source;
            if(options.camera === true) {
                source = Camera.PictureSourceType.CAMERA;
            } else {
                source = Camera.PictureSourceType.PHOTOLIBRARY;
            }

            var deferred = $q.defer();

            document.addEventListener("deviceready", function () {
                var options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: source,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    deferred.resolve(imageData);
                }, function (err) {
                    // error
                    deferred.reject(err);
                });
            }, false);

            //return a promise
            return deferred.promise;
        }
    };
}]);
