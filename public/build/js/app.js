angular.module('app', ['ngRoute', 'ngSanitize','hc.marked']);
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
