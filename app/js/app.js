//Angular app
var app = angular.module('SSOApp',['ngRoute']);

//Routing
app.config(function($routeProvider){
   $routeProvider
      .when('/',{
         templateUrl: 'views/home.html',
         controller: 'MainController'
      })
      .when('/simulator',{
         templateUrl: 'views/script.html',
         controller: 'MainController'
      })
      .when('/about',{
         templateUrl: 'views/about.html',
         controller: 'MainController'
      })
      .when('/contact',{
         templateUrl: 'views/contact.html',
         controller: 'MainController'
      })
      .otherwise({
         redirectTo: '/'
      });
});
