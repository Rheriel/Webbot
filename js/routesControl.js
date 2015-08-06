var module = angular.module("webbot", ['ngRoute']);

module.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/splashView.html'
            }).when('/project', {
                templateUrl: 'views/projectView.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);