//Angular app
var app = angular.module('SSOApp',['ngRoute']);

//Routing
app.config(function($routeProvider){
   $routeProvider
      .when('/',{
         templateUrl: 'views/home.html'
      })
      .when('/simulator',{
         templateUrl: 'views/simulator.html'
      })
      .when('/about',{
         templateUrl: 'views/about.html'
      })
      .when('/contact',{
         templateUrl: 'views/contact.html'
      })
      .otherwise({
         redirectTo: '/'
      });
});
