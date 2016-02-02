angular.module('GoogleAnalytics', [])
.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart",function(event, next, current){
        if(next.templateUrl) {
            ga('send', 'pageview', { page: next.templateUrl });
        }
    });
});
