//Angular app
var app = angular.module('SSOApp',['ngRoute']);

//Routing
app.config(function($routeProvider){
   $routeProvider
      .when('/',{
         templateUrl: 'views/home.html',
         activeTab: 'home'
      })
      .when('/simulator',{
         templateUrl: 'views/script.html',
         activeTab: 'simulator'
      })
      .when('/about',{
         templateUrl: 'views/about.html',
         activeTab: 'about'
      })
      .when('/contact',{
         templateUrl: 'views/contact.html',
         activeTab: 'contact'
      })
      .when('/login',{
         templateUrl: 'views/login.html',
         controller: 'LogInController',
         activeTab: 'login'
      })
      .when('/signup', {
         templateUrl: 'views/signup.html',
         controller: 'SignUpController',
         activeTab: 'signup'
      })
      .otherwise({
         redirectTo: '/'
      });
});
