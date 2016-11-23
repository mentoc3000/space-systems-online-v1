//Angular app
var app = angular.module('SSOApp',['ngRoute','ngCookies']);

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
})

.run(['$rootScope', '$location', '$cookieStore', '$http',
   function($rootScope, $location, $cookiestore, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookiestore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      }

         $rootScope.$on('$locationChangeStart', function(event, next, current) {
            //redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
               $location.path('/login');
            }
         });
      }]);
