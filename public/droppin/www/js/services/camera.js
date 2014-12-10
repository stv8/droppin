app.factory('Camera', ['$rootScope', '$q', function($rootScope, $q) {
        return {
            getPicture: function(options) {

                // init $q
                var deferred = $q.defer();


                // create file input without appending to DOM
                var fileInput = document.createElement('input');
                fileInput.setAttribute('type', 'file');

                fileInput.onchange = function() {
                    var file = fileInput.files[0];
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        $rootScope.$apply(function() {
                            // strip beginning from string
                            var encodedData = reader.result.replace(/data:image\/jpeg;base64,/, '');
                            deferred.resolve(encodedData);
                        });
                    };
                };

                fileInput.click();



                //// set some default options
                //var defaultOptions = {
                //    quality: 75,
                //    destinationType: Camera.DestinationType.DATA_URL,
                //    allowEdit: true,
                //    targetWidth: 75,
                //    targetHeight: 75
                //};
                //
                //// allow overriding the default options
                //options = angular.extend(defaultOptions, options);
                //
                //// success callback
                //var success = function(imageData) {
                //    $rootScope.$apply(function() {
                //        deferred.resolve(imageData);
                //    });
                //};
                //
                //// fail callback
                //var fail = function(message) {
                //    $rootScope.$apply(function() {
                //        deferred.reject(message);
                //    });
                //};
                //
                //// open camera via cordova
                //navigator.camera.getPicture(success, fail, options);



                // return a promise
                return deferred.promise;

            }
        };

    }]);
