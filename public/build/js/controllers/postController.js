angular.module('app').controller('PostController', ['$scope','$http','$routeParams', '$filter', '$rootScope', '$location','$interpolate',
function($scope, $http, $routeParams, $filter, $rootScope, $location, $interpolate){
  $http.get('./db/posts.json').success(function(response) {
    var id = $routeParams.id;
    var obj =  $filter('filter')(response.posts, {id: id})[0];
    $rootScope.title = obj.title;
    ga('send', 'pageview', { page: $location.path(), title: $rootScope.title });
    $http.get(obj.url).success(function(mark){
      $scope.post.url = mark;
    })
    $scope.post = obj;
  });
}]);
