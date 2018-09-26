var appControllers = angular.module('appControllers', []);

appControllers.controller('SearchController', 
  function appController($scope, $http) {
    $http.get('js/data.json').then(function(response) {
      $scope.students = response.data;
      $scope.studentOrder = 'name';
  });
});

appControllers.controller('DetailsController', 
function appController($scope, $http, $routeParams) {
  // Here we use the $http.get to get the data from a json file
  // After that we use a promise to get the response.
  $http.get('js/data.json').then(function(response) {
    // Here we get the response
    $scope.students = response.data;
    $scope.whichItem = $routeParams.itemId;
    // Here we rotate the array to the previous item/student
    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.students.length - 1;
    }
    // Here we rotate the array to the next item/student
    if ($routeParams.itemId < $scope.students.length-1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }
  });
});