//Angular app
var app = angular.module('SSOApp',['ngRoute']);

//Routing
app.config(function($routeProvider){
   $routeProvider
      .when('/',{
         controller: 'MainController',
         templateUrl: 'views/main.html'
      })
      .otherwise({
         redirectTo: '/'
      });
});
