angular.module('app', ['ngRoute']);
angular.module('app').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl: './public/build/views/home.html',
    controller: 'HomeController'
  })
  .when('/post',{
    templateUrl: './public/build/views/post.html',
    controller: 'PostController'
  })
  .otherwise('/home');
}]);
angular.module('app').controller('HomeController', ['$scope','$http', function($scope, $http){
  $scope.hello = "Douglas";
  $http.get('./db/posts.json').success(function(response) {
    $scope.posts = response.posts;
  });
}]);
angular.module('app').controller('PostController', ['$scope','$http', function($scope, $http){
  $scope.hello = "Douglas";
  $http.get('./db/posts.json').success(function(response) {
    $scope.posts = response.posts;
  });
}]);
