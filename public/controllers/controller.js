var myApp = angular.module('ContactList', []);

myApp.controller('AppCtrl', ['$scope', function($scope) {
  console.log('Hello world from the controller');

  self = this;

  person1 = {
    name: "Mattia",
    email: "mattia@gmail.com",
    number: "12345"
  };

  person2 = {
    name: "Maria",
    email: "maria@gmail.com",
    number: "12345"
  };

  person3 = {
    name: "Mario",
    email: "Mario@gmail.com",
    number: "12345"
  };

  var contactlist = [person1, person2, person3];
  $scope.contactlist = contactlist;
  console.log(contactlist);
}]);
