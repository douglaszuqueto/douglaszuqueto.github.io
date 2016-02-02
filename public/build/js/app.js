angular.module('app', ['ngRoute']);
angular.module('app').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl: './public/build/views/home.html',
    controller: 'HomeController'
  })
  .when('/post/:id',{
    templateUrl: './public/build/views/post.html',
    controller: 'PostController'
  })
  .when('/about',{
    templateUrl: './public/build/views/about.html',
    controller: 'AboutController'
  })
  .when('/contact',{
    templateUrl: './public/build/views/contact.html',
    controller: 'ContactController'
  })
  .otherwise('/home');
}]);
angular.module('app').controller('HomeController', ['$scope','$http','$rootScope','$location', function($scope, $http, $rootScope, $location){
  $rootScope.title = "Página Inicial";
  ga('send', 'pageview', { page: $location.path(), title: $rootScope.title });
  $http.get('./db/posts.json').success(function(response) {
    $scope.posts = response.posts;
  });
}]);
angular.module('app').controller('PostController', ['$scope','$http','$routeParams', '$filter', '$rootScope', '$location',
function($scope, $http, $routeParams, $filter, $rootScope, $location){
  $http.get('./db/posts.json').success(function(response) {
    var id = $routeParams.id;
    var obj =  $filter('filter')(response.posts, {id: id})[0];
    $rootScope.title = obj.title;
    ga('send', 'pageview', { page: $location.path(), title: $rootScope.title });
    $scope.post = obj;
  });
}]);
