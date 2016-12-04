(function() {

   angular
      .module('SSOApp',['ui.router'])
      .config(config)
      .run(run);

   //Routing
   function config($stateProvider, $urlRouterProvider){
      // default route
      $urlRouterProvider.otherwise('/');

      $stateProvider

         .state('home', {
            url:'/',
            views: {
               "header": {
                  templateUrl: 'header/header.html',
                  controller: 'HeaderController',
                  controllerAs: 'vm'
               },
               "main": {
                  templateUrl: 'main/home.html',
                  controller: 'MainController',
                  controllerAs: 'vm',
               }
            },
            data: { activeTab: 'home'}
         })

         .state('account', {
            url: '/account',
            views: {
               "header": {
                  templateUrl: 'header/header.html',
                  controller: 'HeaderController',
                  controllerAs: 'vm'
               },
               "main": {
                  templateUrl: 'account/account.html',
                  controller: 'AccountController',
                  controllerAs: 'vm',
               }
            },
            data: { activeTab: 'account' }
         })

         .state('simulator', {
            url: '/simulator',
            views: {
               "header": {
                  templateUrl: 'header/header.html',
                  controller: 'HeaderController',
                  controllerAs: 'vm'
               },
               "main": {
                  templateUrl: 'simulator/script.html',
                  controller: 'MainController',
                  controllerAs: 'vm',
               }
            },
            data: { activeTab: 'simulator' }
         })

         .state('about', {
            url: '/about',
            views: {
               "header": {
                  templateUrl: 'header/header.html',
                  controller: 'HeaderController',
                  controllerAs: 'vm'
               },
               "main": {
                  templateUrl: 'main/about.html',
                  controller: 'MainController',
                  controllerAs: 'vm',
               }
            },
            data: { activeTab: 'about' }
         })

         .state('contact', {
            url: '/contact',
            views: {
               "header": {
                  templateUrl: 'header/header.html',
                  controller: 'HeaderController',
                  controllerAs: 'vm'
               },
               "main": {
                  templateUrl: 'main/contact.html',
                  controller: 'MainController',
                  controllerAs: 'vm',
               }
            },
            data: { activeTab: 'contact' }
         });
   }

   function run($http, $rootScope, $window) {
      // add JWT token as default auth header
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken; // jshint ignore:line

      // update active tab on state change
      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
         $rootScope.activeTab = toState.data.activeTab;
      });
   }

   // manually bootstrap angular after the JWT token is retrieved from the server
   $(function () {
      // get JWT token from server
      $.get('/app/token', function(token) {
         window.jwtToken = token;

         angular.bootstrap(document, ['SSOApp']);
      });
   });

})();   
