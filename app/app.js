(function() {

   angular
      .module('SSOApp',['ui.router'])
      .config(config)
      .run(run);

   //Routing
   function config($stateProvider, $urlRouterProvider, $locationProvider){
      // default route
      $urlRouterProvider.otherwise('/');

      var header = {
         templateUrl: 'header/header.html',
         controller: 'HeaderController',
         controllerAs: 'vm'
      };

      function mainView(templateUrl) {
         return {
            templateUrl: templateUrl,
            controller: 'MainController',
            controllerAs: 'vm',
         };
      }

      var footer = {
         templateUrl: 'main/footer.html'
      };

      $stateProvider

         .state('home', {
            url:'/',
            views: {
               "header": header,
               "main": mainView('main/home.html'),
               "footer": footer
            },
            data: { activeTab: 'home'}
         })

         .state('account', {
            url: '/account',
            views: {
               "header": header,
               "main": {
                  templateUrl: 'account/account.html',
                  controller: 'AccountController',
                  controllerAs: 'vm'
               },
               "footer": footer
            },
            data: { activeTab: 'account' }
         })

         .state('simulator', {
            url: '/simulator',
            views: {
               "header": header,
               "main": mainView('simulator/script.html'),
               "footer": footer
            },
            data: { activeTab: 'simulator' }
         })

         .state('about', {
            url: '/about',
            views: {
               "header": header,
               "main": mainView('main/about.html'),
               "footer": footer
            },
            data: { activeTab: 'about' }
         })

         .state('contact', {
            url: '/contact',
            views: {
               "header": header,
               "main": mainView('main/contact.html'),
               "footer": footer
            },
            data: { activeTab: 'contact' }
         });

      // use the HTML5 History API
      $locationProvider.html5Mode(true).hashPrefix('!');

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
      $.get('/main/token', function(token) {
         window.jwtToken = token;

         angular.bootstrap(document, ['SSOApp']);
      });
   });

})();   
