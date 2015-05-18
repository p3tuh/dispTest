var myApp = angular.module('myApp', [])
 
.controller('myCtrl', function($scope){ 
})

.factory('getPlaces', function() {
    
})

.directive('googleplace', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, model) {
        //bound to San Francisco area
      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(37.709097, -122.501973),
        new google.maps.LatLng(37.832103, -122.368850)
      );

      var options = {
        bounds: defaultBounds,
        types: []
      };

      scope.autoComplete = new google.maps.places.Autocomplete(element[0], options);
      console.log('autoComplete: ', scope.autoComplete);

      google.maps.event.addListener(scope.autoComplete, 'place_chosen', function() {
          scope.$apply(function() {
              model.$setViewValue(element.val());                
          });
      });
    }
  };
});
