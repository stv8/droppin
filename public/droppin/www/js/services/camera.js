app.factory('Camera', ['$rootScope', '$q', '$cordovaCamera', function($rootScope, $q, $cordovaCamera) {
    return {
        getPicture: function (options) {

            // init $q
            var deferred = $q.defer();
            //
            //    // create file input without appending to DOM
            //    var fileInput = document.createElement('input');
            //    fileInput.setAttribute('type', 'file');
            //
            //    fileInput.onchange = function() {
            //        var file = fileInput.files[0];
            //        var reader = new FileReader();
            //
            //        reader.readAsDataURL(file);
            //        reader.onload = function () {
            //            $rootScope.$apply(function() {
            //                // strip beginning from string
            //                var encodedData = reader.result.replace(/data:image\/jpeg;base64,/, '');
            //                deferred.resolve(encodedData);
            //            });
            //        };
            //    };
            //
            //    fileInput.click();

            document.addEventListener("deviceready", function () {

                var options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
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
    }
}]);
