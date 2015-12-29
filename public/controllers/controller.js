var myApp = angular.module('ContactList', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('Hello world from the controller');

  var refresh = function() {
  $http.get('/contactlist').success(function(response) {
      console.log('I got the data requeste');
      $scope.contactlist = response;
      $scope.contact = '';
  });
};

refresh();

  $scope.addContact = function() {
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function(response) {
          console.log(response);
          refresh();
      });
  };
}]);
