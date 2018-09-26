// First we define the module's name and assign the value to the variable artsStudentApp.
var artsStudentApp = angular.module('artsStudentApp', [
  // Next we define the two dependencies we'll be using.
  'ngRoute',
  'appControllers'
]);

artsStudentApp.config(['$routeProvider', function($routeProvider) {
  // Here we manage the routes.
  $routeProvider
    .when('/', {
      templateUrl: 'js/partials/search.html',
      controller: 'SearchController'
    })
    .when('/details/:itemId', {
      templateUrl: 'js/partials/details.html',
      controller: 'DetailsController'
    });
}]);

