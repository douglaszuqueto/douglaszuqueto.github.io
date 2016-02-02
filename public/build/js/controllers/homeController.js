angular.module('app').controller('HomeController', ['$scope','$http','$rootScope','$location', function($scope, $http, $rootScope, $location){
  $rootScope.title = "Página Inicial";
  ga('send', 'pageview', { page: $location.path(), title: $rootScope.title });
  $http.get('./db/posts.json').success(function(response) {
    $scope.posts = response.posts;
  });
}]);
