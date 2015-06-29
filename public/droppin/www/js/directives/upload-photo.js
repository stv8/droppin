app.directive('uploadPhoto', function($ionicActionSheet, Camera, $timeout) {
  return {
      restrict: 'E',
      templateUrl: 'templates/upload-photo.html',


      link: function($scope, element, attrs) {
          $scope.getPhoto = function() {

              // Show the action sheet
              var hideSheet = $ionicActionSheet.show({
                  buttons: [
                      { text: 'Open Gallery' },
                      { text: 'Take Photo' }
                  ],
                  titleText: 'Select a source.',
                  cancelText: 'Cancel',
                  cancel: function() {
                      // add cancel code..
                      hideSheet();
                  },
                  buttonClicked: function(index) {
                      if(index === 0) {
                          $scope.takePicture({camera: false});
                      } else if(index == 1) {
                          $scope.takePicture({camera: true});
                      }

                      return true;
                  }
              });

              $timeout(function() {
                  hideSheet();
              }, 4000);
          };

          $scope.takePicture = function(camera) {
              Camera.getPicture(camera).then(function(imageData) {
                  $scope.picSrc = "data:image/jpeg;base64," + imageData;
                  console.log($scope.picSrc);
                  $scope.spot.photo.data = imageData;
                  $('#thumb-preview').attr('src', $scope.picSrc);
              })
              .catch(function(error) {
                  console.log(error);
              });
          };
      }
  };
});
