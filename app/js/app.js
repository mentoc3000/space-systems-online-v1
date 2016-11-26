//Angular app
var app = angular.module('SSOApp',['ngRoute','ngCookies']);

//Routing
app.config(function($routeProvider){
   $routeProvider
      .when('/',{
         templateUrl: 'views/home.html',
         activeTab: 'home',
         controllerAs: 'vm'
      })
      .when('/simulator',{
         templateUrl: 'views/script.html',
         activeTab: 'simulator',
         controllerAs: 'vm'
      })
      .when('/about',{
         templateUrl: 'views/about.html',
         activeTab: 'about',
         controllerAs: 'vm'
      })
      .when('/contact',{
         templateUrl: 'views/contact.html',
         activeTab: 'contact',
         controllerAs: 'vm'
      })
      .when('/login',{
         templateUrl: 'views/login.html',
         controller: 'LogInController',
         activeTab: 'login',
         controllerAs: 'vm'
      })
      .when('/register', {
         templateUrl: 'views/register.html',
         controller: 'RegisterController',
         activeTab: 'register',
         controllerAs: 'vm'
      })
      .otherwise({
         redirectTo: '/'
      });
})

   .run(['$rootScope', '$location', '$cookieStore', '$http',
      function($rootScope, $location, $cookieStore, $http) {
         // keep user logged in after page refresh
         $rootScope.globals = $cookieStore.get('globals') || {};
         if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
         }

         $rootScope.$on('$locationChangeStart', function(event, next, current) {
            //redirect to login page if not logged in
            var restrictedPage = $.inArray($location.path(), [
               '/login',
               '/register'
            ]) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && loggedIn) {
               $location.path('/login');
            }
         });
      }]);
