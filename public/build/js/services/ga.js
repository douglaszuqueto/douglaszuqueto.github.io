angular.module('GoogleAnalytics', [])
.run(function ($rootScope, $location) {
  $rootScope.$on("$routeChangeSuccess",function(event, next, current){
    ga('send', 'pageview', { page: $location.path(), title: $rootScope.title });
  });
});
