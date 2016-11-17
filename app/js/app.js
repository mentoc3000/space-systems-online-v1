//Angular app
var app = angular.module('SSOApp',['ngRoute']);

//Routing
app.config(function($routeProvider){
   $routeProvider
      .when('/',{
         templateUrl: 'views/home.html',
         controller: 'MainController',
         activeTab: 'home'
      })
      .when('/simulator',{
         templateUrl: 'views/script.html',
         controller: 'MainController',
         activeTab: 'simulator'
      })
      .when('/about',{
         templateUrl: 'views/about.html',
         controller: 'MainController',
         activeTab: 'about'
      })
      .when('/contact',{
         templateUrl: 'views/contact.html',
         controller: 'MainController',
         activeTab: 'contact'
      })
      .otherwise({
         redirectTo: '/'
      });
});
