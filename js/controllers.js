var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http) {
  $scope.artists = [];
  $http.get('http://devsoftx.net/data.json').success(function(data){
    $scope.artists = data;
  });
});

