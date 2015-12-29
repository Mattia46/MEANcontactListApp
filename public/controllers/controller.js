var myApp = angular.module('ContactList', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('Hello world from the controller');

  $http.get('/contactlist').success(function(response) {
      console.log('I got the data requeste');
      $scope.contactlist = response;
  });

}]);
